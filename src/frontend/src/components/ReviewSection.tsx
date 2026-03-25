import { useState } from "react";
import { toast } from "sonner";
import { useMishi } from "../store/store";

interface ReviewSectionProps {
  productId: number;
}

function StarSelector({
  value,
  onChange,
}: { value: number; onChange: (v: number) => void }) {
  const [hovered, setHovered] = useState(0);
  return (
    <div style={{ display: "flex", gap: 4 }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          data-ocid={`review.star.${star}`}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "24px",
            padding: 0,
            lineHeight: 1,
          }}
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          onClick={() => onChange(star)}
        >
          {star <= (hovered || value) ? "⭐" : "☆"}
        </button>
      ))}
    </div>
  );
}

function StarDisplay({ rating }: { rating: number }) {
  return (
    <span style={{ fontSize: "14px" }}>
      {"⭐".repeat(rating)}
      {"☆".repeat(5 - rating)}
    </span>
  );
}

function maskPhone(phone: string): string {
  return phone.length > 4 ? `****${phone.slice(-4)}` : "****";
}

export default function ReviewSection({ productId }: ReviewSectionProps) {
  const { reviews, addReview, isLoggedIn, phone, navigate } = useMishi();
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [mediaBase64, setMediaBase64] = useState("");
  const [mediaType, setMediaType] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const approved = reviews.filter(
    (r) => r.productId === productId && r.isApproved,
  );

  const handleMediaUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      setMediaBase64(ev.target?.result as string);
      setMediaType(file.type);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = () => {
    if (!comment.trim()) return;
    setSubmitting(true);
    addReview({
      productId,
      customerPhone: phone,
      rating,
      comment: comment.trim(),
      mediaBase64: mediaBase64 || undefined,
      mediaType: mediaType || undefined,
    });
    setComment("");
    setRating(5);
    setMediaBase64("");
    setMediaType("");
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Review submitted for approval! ✨");
    }, 500);
  };

  return (
    <div
      className="glass-card"
      style={{ padding: "32px", marginTop: "40px" }}
      data-ocid="reviews.section"
    >
      <h2
        style={{
          fontFamily: "Playfair Display, serif",
          fontSize: "1.8rem",
          marginBottom: "8px",
        }}
        className="gold-gradient"
      >
        Royal Reviews
      </h2>
      <div className="royal-divider" style={{ marginBottom: "24px" }} />

      {/* Approved reviews */}
      {approved.length === 0 ? (
        <p
          className="text-gray-400 text-sm mb-6"
          data-ocid="reviews.empty_state"
        >
          Be the first to share your royal experience!
        </p>
      ) : (
        <div
          className="space-y-4 mb-8"
          style={{ maxHeight: 400, overflowY: "auto" }}
          data-ocid="reviews.list"
        >
          {approved.map((r, i) => (
            <div
              key={r.id}
              className="glass-card"
              style={{ padding: "16px" }}
              data-ocid={`reviews.item.${i + 1}`}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 8,
                  flexWrap: "wrap",
                  gap: 8,
                }}
              >
                <div>
                  <StarDisplay rating={r.rating} />
                  <p
                    className="text-gray-400"
                    style={{ fontSize: "12px", marginTop: 4 }}
                  >
                    {maskPhone(r.customerPhone)}
                  </p>
                </div>
                <p className="text-gray-500" style={{ fontSize: "11px" }}>
                  {new Date(r.submittedAt).toLocaleDateString("en-IN")}
                </p>
              </div>
              <p
                className="text-gray-300"
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "1rem",
                  lineHeight: 1.6,
                }}
              >
                {r.comment}
              </p>
              {r.mediaBase64 && (
                <img
                  src={r.mediaBase64}
                  alt="Customer review"
                  style={{
                    marginTop: 8,
                    maxWidth: 120,
                    borderRadius: 8,
                    border: "1px solid rgba(212,175,55,0.3)",
                  }}
                />
              )}
            </div>
          ))}
        </div>
      )}

      {/* Leave a review */}
      {isLoggedIn ? (
        <div data-ocid="reviews.panel">
          <h3
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "1.2rem",
              marginBottom: "16px",
            }}
            className="text-amber-100"
          >
            Leave Your Royal Review
          </h3>
          <div className="space-y-4">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">
                Your Rating
              </p>
              <StarSelector value={rating} onChange={setRating} />
            </div>
            <div>
              <label
                htmlFor="review-comment"
                className="text-xs text-gray-400 uppercase tracking-widest block mb-2"
              >
                Your Experience
              </label>
              <textarea
                id="review-comment"
                data-ocid="reviews.textarea"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Share your royal experience with this piece..."
                rows={3}
                className="w-full bg-transparent text-amber-100 text-sm outline-none resize-none placeholder-gray-600"
                style={{
                  border: "1px solid rgba(212,175,55,0.3)",
                  borderRadius: "8px",
                  padding: "10px",
                  boxSizing: "border-box",
                }}
              />
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">
                Photo (Optional)
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  flexWrap: "wrap",
                }}
              >
                <label
                  htmlFor="review-photo"
                  data-ocid="reviews.upload_button"
                  style={{
                    padding: "8px 16px",
                    border: "1px solid rgba(212,175,55,0.4)",
                    borderRadius: "6px",
                    color: "#D4AF37",
                    cursor: "pointer",
                    fontSize: "13px",
                  }}
                >
                  📷 Upload Photo
                </label>
                <input
                  id="review-photo"
                  type="file"
                  accept="image/*,video/*"
                  style={{ display: "none" }}
                  onChange={handleMediaUpload}
                />
                {mediaBase64 && (
                  <img
                    src={mediaBase64}
                    alt="preview"
                    style={{
                      width: 50,
                      height: 50,
                      objectFit: "cover",
                      borderRadius: 6,
                      border: "1px solid rgba(212,175,55,0.4)",
                    }}
                  />
                )}
              </div>
            </div>
            <button
              type="button"
              data-ocid="reviews.submit_button"
              onClick={handleSubmit}
              disabled={!comment.trim() || submitting}
              className="btn-gold px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? "Submitting..." : "Submit Royal Review ✦"}
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center py-6" data-ocid="reviews.login_state">
          <p className="text-gray-400 mb-4 text-sm">
            Login to leave a review for this piece
          </p>
          <button
            type="button"
            data-ocid="reviews.login_button"
            onClick={() => navigate("login")}
            className="btn-outline-gold px-6 py-2"
          >
            Login to Review
          </button>
        </div>
      )}
    </div>
  );
}
