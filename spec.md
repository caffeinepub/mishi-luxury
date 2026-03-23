# MISHI Luxury — Super Admin Upgrade

## Current State
- `/mishi-internal-control` uses a master password login (`MISHIOWNER2025`)
- Has tabs: Add New Jewelry, Change Prices, View Orders, Change Password
- No role differentiation, no team management, no Gmail-based login

## Requested Changes (Diff)

### Add
- Gmail-only login: User enters their Gmail address; if it matches the stored Super Admin Gmail (`mishiofficial1701@gmail.com`), full access is granted. If it matches a team member Gmail, limited access per their role is granted.
- Team tab (Super Admin only): List all team members, add new member (Gmail + Role), delete member, Revoke Access button per member.
- Role system: `superAdmin`, `manager`, `viewer`. Manager can access Add Jewelry and Change Prices. Viewer gets read-only orders. SuperAdmin gets everything.
- Role-based tab gating: Orders/Financials and Team tabs only visible to Super Admin. Settings/Change Password only for Super Admin.
- Activity log strip: Show recent actions (admin added, price changed) as a simple in-memory list at the bottom of the header.
- Session revocation: If a team member's access is revoked, they cannot use the dashboard (their Gmail is removed from the allowed list).

### Modify
- Login screen: Replace password input with Gmail input. Super Admin logs in by entering `mishiofficial1701@gmail.com`. Team members log in with their stored Gmail.
- Tab list: Add "Team" and rename "Change Password" to "Settings". Show tabs conditionally based on role.
- Header: Show logged-in Gmail and role badge.

### Remove
- Master password login flow
- Change Password tab (replaced by Settings tab for Super Admin only)

## Implementation Plan
1. Replace `InternalControlPage.tsx` entirely with new Gmail-based auth logic
2. Store team members as in-memory state: `{ gmail: string, role: 'manager' | 'viewer', name: string, addedAt: string }[]`
3. On login: check if entered Gmail matches Super Admin Gmail or any team member Gmail; set session role accordingly
4. Render tabs conditionally: Super Admin sees all 5 tabs; Manager sees Add/Prices; Viewer sees Orders only
5. Team tab: table of members, Add Member form (Gmail + Name + Role), Revoke Access (delete) button per row
6. Activity log: simple array of strings tracking actions like 'Admin added: xyz@gmail.com', 'Price updated: Product X'
7. Settings tab (Super Admin only): placeholder for system settings
