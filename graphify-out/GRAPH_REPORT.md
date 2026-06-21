# Graph Report - .  (2026-06-21)

## Corpus Check
- 34 files · ~84,464 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 84 nodes · 86 edges · 12 communities (7 shown, 5 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_TypeScript Configuration|TypeScript Configuration]]
- [[_COMMUNITY_Booking Consultation System|Booking Consultation System]]
- [[_COMMUNITY_Package Scripts & Dependencies|Package Scripts & Dependencies]]
- [[_COMMUNITY_Development Tools|Development Tools]]
- [[_COMMUNITY_Application Layout|Application Layout]]
- [[_COMMUNITY_ESLint Configuration|ESLint Configuration]]
- [[_COMMUNITY_Next.js Build Configuration|Next.js Build Configuration]]
- [[_COMMUNITY_PostCSS Configuration|PostCSS Configuration]]
- [[_COMMUNITY_Sans Serif Fonts|Sans Serif Fonts]]
- [[_COMMUNITY_Monospace Fonts|Monospace Fonts]]

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `useBooking()` - 9 edges
3. `scripts` - 5 edges
4. `paths` - 2 edges
5. `BookingModal()` - 2 edges
6. `CallToAction()` - 2 edges
7. `Hero()` - 2 edges
8. `Navbar()` - 2 edges
9. `BookingProvider()` - 2 edges
10. `eslintConfig` - 1 edges

## Surprising Connections (you probably didn't know these)
- `BookingModal()` --calls--> `useBooking()`  [EXTRACTED]
  src/components/BookingModal/BookingModal.tsx → src/context/BookingContext.tsx
- `CallToAction()` --calls--> `useBooking()`  [EXTRACTED]
  src/components/CallToAction/CallToAction.tsx → src/context/BookingContext.tsx
- `Hero()` --calls--> `useBooking()`  [EXTRACTED]
  src/components/Hero/Hero.tsx → src/context/BookingContext.tsx
- `Navbar()` --calls--> `useBooking()`  [EXTRACTED]
  src/components/Navbar/Navbar.tsx → src/context/BookingContext.tsx

## Communities (12 total, 5 thin omitted)

### Community 0 - "TypeScript Configuration"
Cohesion: 0.10
Nodes (19): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+11 more)

### Community 2 - "Booking Consultation System"
Cohesion: 0.23
Nodes (9): BookingModal(), FormErrors, FormState, CallToAction(), BookingContext, BookingContextType, useBooking(), Hero() (+1 more)

### Community 3 - "Package Scripts & Dependencies"
Cohesion: 0.15
Nodes (12): dependencies, next, react, react-dom, name, private, scripts, build (+4 more)

### Community 4 - "Development Tools"
Cohesion: 0.22
Nodes (9): devDependencies, eslint, eslint-config-next, tailwindcss, @tailwindcss/postcss, @types/node, @types/react, @types/react-dom (+1 more)

### Community 5 - "Application Layout"
Cohesion: 0.40
Nodes (3): inter, metadata, BookingProvider()

## Knowledge Gaps
- **46 isolated node(s):** `eslintConfig`, `nextConfig`, `name`, `version`, `private` (+41 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `Development Tools` to `Package Scripts & Dependencies`?**
  _High betweenness centrality (0.039) - this node is a cross-community bridge._
- **What connects `eslintConfig`, `nextConfig`, `name` to the rest of the system?**
  _46 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `TypeScript Configuration` be split into smaller, more focused modules?**
  _Cohesion score 0.1 - nodes in this community are weakly interconnected._
- **Should `Landing Page Sections` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._