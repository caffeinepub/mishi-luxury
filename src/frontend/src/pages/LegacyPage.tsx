export default function LegacyPage() {
  const timeline = [
    {
      year: "2020",
      title: "The Dream",
      desc: "A couple united by a shared vision — to build a luxury empire rooted in India's rich heritage. The seed of MISHI was planted.",
    },
    {
      year: "2022",
      title: "The Foundation",
      desc: "Research into Sterling Silver craftsmanship and heritage ethnic weaves. Connecting with master artisans across India.",
    },
    {
      year: "2024",
      title: "First Collection",
      desc: "The inaugural collection of Sterling Silver Ornaments launched — each piece hallmarked 925 and crafted to royal standards.",
    },
    {
      year: "2025",
      title: "MISHI Launch",
      desc: "MISHI officially opens its doors to the world. Sterling Silver and Royal Ethnic Wear — two pillars of our identity.",
    },
    {
      year: "2028",
      title: "Global Empire",
      desc: "Mission 2028 — MISHI stands as a global luxury brand, synonymous with purity, heritage, and royal craftsmanship.",
    },
  ];

  const values = [
    {
      icon: "✨",
      title: "Purity",
      desc: "Every Sterling Silver piece is 92.5% pure, hallmarked, and tested. We never compromise on the metal that carries your legacy.",
    },
    {
      icon: "🏛️",
      title: "Heritage",
      desc: "Our ethnic wear is woven with centuries of Indian weaving traditions — Banarasi, Kanjeevaram, Lucknawi — preserved for posterity.",
    },
    {
      icon: "⚒️",
      title: "Craftsmanship",
      desc: "Each MISHI piece is handcrafted by artisans who have inherited their skills across generations. Never mass-produced, always made with love.",
    },
    {
      icon: "👁️",
      title: "Vision",
      desc: "Mission 2028 is not just a goal — it is a promise. A promise to make MISHI synonymous with royal luxury globally.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero */}
      <section className="relative py-32 px-6 text-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(75,0,130,0.3) 0%, rgba(10,10,15,0) 70%)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-xs tracking-[0.4em] text-yellow-400 uppercase mb-4">
            Est. 2025 · Mission 2028
          </p>
          <h1
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(2.5rem, 8vw, 6rem)",
              lineHeight: 1,
            }}
            className="gold-gradient mb-6"
          >
            The MISHI Legacy
          </h1>
          <div className="royal-divider w-64 mx-auto" />
          <p
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
              fontStyle: "italic",
              lineHeight: 1.7,
            }}
            className="text-gray-300 mt-6"
          >
            "Born from an unwavering dream, MISHI is more than a brand — it is a
            dynasty in the making."
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <div className="glass-card p-10 md:p-16">
          <p className="text-xs tracking-[0.4em] text-yellow-400 uppercase mb-6">
            Our Story
          </p>
          <div
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
              lineHeight: 1.9,
            }}
            className="text-gray-300 space-y-5"
          >
            <p>
              It began not with a business plan, but with a belief. A visionary
              couple, united by love and an audacious dream — to create a luxury
              brand that would one day grace the wrists, necks, and hearts of
              people across the globe.
            </p>
            <p>
              MISHI was conceived on the twin pillars of{" "}
              <span className="gold-text font-semibold">Purity</span> and{" "}
              <span className="gold-text font-semibold">Heritage</span>. Purity
              in the form of 925 hallmarked Sterling Silver, crafted by the
              finest artisans. Heritage in the form of Royal Ethnic Wear — each
              weave telling a story older than any empire.
            </p>
            <p>
              We do not merely sell jewellery or clothing. We offer you a piece
              of history, a fragment of royalty, a connection to something far
              greater than the transient. Every MISHI creation is a testament to{" "}
              <span className="gold-text">Craftsmanship</span>,{" "}
              <span className="gold-text">Vision</span>, and{" "}
              <span className="gold-text">Royal Standards</span> that refuse to
              bend.
            </p>
            <p>
              Mission 2028 is our covenant with the world. By 2028, MISHI will
              stand as a global luxury empire — not built overnight, but forged
              over years of unwavering dedication, one perfect piece at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Message */}
      <section className="py-16 px-6 max-w-3xl mx-auto">
        <div
          className="glass-card p-10 text-center relative"
          style={{
            background:
              "linear-gradient(135deg, rgba(75,0,130,0.2), rgba(10,10,15,0.8))",
          }}
        >
          <div className="text-5xl mb-6">🦁</div>
          <p className="text-xs tracking-[0.4em] text-yellow-400 uppercase mb-6">
            Founder's Message
          </p>
          <blockquote
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
              fontStyle: "italic",
              lineHeight: 1.8,
            }}
            className="text-gray-200 mb-8"
          >
            "We did not build MISHI to compete — we built it to transcend. Every
            piece we create carries our legacy, our love, and our promise of
            Royal Standards that will outlast trends, outlast time. This is not
            a brand. This is our heritage — passed on to you."
          </blockquote>
          <div className="royal-divider w-32 mx-auto mb-4" />
          <p
            style={{ fontFamily: "Playfair Display, serif" }}
            className="gold-text text-lg"
          >
            The Founders
          </p>
          <p className="text-gray-500 text-sm tracking-widest uppercase">
            MISHI Luxury · Est. 2025
          </p>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <p className="text-xs tracking-[0.4em] text-yellow-400 uppercase mb-3 text-center">
          The Journey
        </p>
        <h2
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
          }}
          className="text-center text-amber-100 mb-16"
        >
          From Dream to Empire
        </h2>
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px hidden md:block"
            style={{
              background:
                "linear-gradient(to bottom, #D4AF37, rgba(212,175,55,0.1))",
            }}
          />
          <div className="space-y-8">
            {timeline.map((item, i) => (
              <div
                key={i}
                className={`flex items-start gap-8 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div
                  className={`flex-1 glass-card p-6 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                >
                  <span className="text-xs tracking-widest text-yellow-400 uppercase">
                    {item.year}
                  </span>
                  <h3
                    style={{
                      fontFamily: "Playfair Display, serif",
                      fontSize: "1.5rem",
                    }}
                    className="text-amber-100 mt-1 mb-2"
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "Cormorant Garamond, serif",
                      fontSize: "1.1rem",
                    }}
                    className="text-gray-400"
                  >
                    {item.desc}
                  </p>
                </div>
                <div
                  className="hidden md:flex w-10 h-10 rounded-full flex-shrink-0 items-center justify-center z-10 relative"
                  style={{
                    background: "linear-gradient(135deg, #D4AF37, #B8960C)",
                    boxShadow: "0 0 20px rgba(212,175,55,0.5)",
                    marginTop: "20px",
                  }}
                >
                  <span className="text-black font-bold text-xs">
                    {item.year.slice(2)}
                  </span>
                </div>
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <p className="text-xs tracking-[0.4em] text-yellow-400 uppercase mb-3 text-center">
          What We Stand For
        </p>
        <h2
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(2rem, 5vw, 3rem)",
          }}
          className="text-center text-amber-100 mb-12"
        >
          Core Values
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div key={i} className="glass-card p-8 text-center">
              <div className="text-4xl mb-4">{v.icon}</div>
              <h3
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontSize: "1.4rem",
                }}
                className="gold-text mb-3"
              >
                {v.title}
              </h3>
              <p
                style={{
                  fontFamily: "Cormorant Garamond, serif",
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                }}
                className="text-gray-400"
              >
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
