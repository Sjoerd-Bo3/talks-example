---
layout: intro
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-slide-up
mdc: true
growSeed: 4
title: Beyond Type Checking
class: text-center
themeColor: blue
fonts:
  # basically the text
  sans: Poppins
  # use with `font-serif` css class from UnoCSS
  serif: Montserrat
  # for code blocks, inline code, etc.
  mono: Roboto Mono
hideWaves: true
---

---
layout: intro
class: text-center
---

# Beyond Type Checking

<h2 color-blue-200 pb-4> Building <span v-mark.blue.underline.delay300 color-white>Bulletproof</span> TypeScript Applications </h2>

<div abs-br mx-10 my-12 pb-8 flex="~ col gap-2" text-right>
  <div><img src="/devworld-logo.png" class="h-8 float-right"></div>
  <div text-sm opacity-75>DevWorld Conference</div>
</div>

<!--
Opening (30 seconds):
- Walk to center stage confidently
- "Welcome everyone to Beyond Type Checking!"
- Pause for title animation
- "I'm excited to share how we can make our TypeScript applications truly bulletproof"

Key Messages (45 seconds):
- "TypeScript has revolutionized how we write JavaScript"
- "But there's a critical gap between compile-time and runtime"
- "Today, we'll bridge that gap together"

Setting Expectations (15 seconds):
- "We'll look at real-world problems"
- "Explore practical solutions"
- "And yes, there will be a live demo!"

Delivery Tips:
- Start with high energy
- Make eye contact across the room
- Use hands to emphasize "bridge that gap"
- Smile when mentioning the demo
-->

---
layout: center
class: text-center
themeColor: blue
---

# Today's Journey

<div class="grid grid-cols-2 gap-4 mt-8 text-center">
  <div v-click class="p-4 border rounded-lg">
    <div i-ph:warning-circle-duotone class="text-4xl mb-2 mx-auto" />
    <div class="font-bold">The Problem</div>
    <div class="text-sm opacity-75">Runtime type safety challenges</div>
  </div>

  <div v-click class="p-4 border rounded-lg">
    <div i-logos-zod class="text-4xl mb-2 mx-auto" />
    <div class="font-bold">The Solution</div>
    <div class="text-sm opacity-75">Runtime validation with Zod</div>
  </div>

  <div v-click class="p-4 border rounded-lg">
    <div i-ph:code-duotone class="text-4xl mb-2 mx-auto" />
    <div class="font-bold">Implementation</div>
    <div class="text-sm opacity-75">Real-world examples</div>
  </div>

  <div v-click class="p-4 border rounded-lg">
    <div i-ph:rocket-launch-duotone class="text-4xl mb-2 mx-auto" />
    <div class="font-bold">Live Demo</div>
    <div class="text-sm opacity-75">End-to-end validation</div>
  </div>
</div>

<!--
1. Walk through each quadrant: "In this session, we'll explore the runtime type safety challenges we face."
2. Emphasize practical focus: "I'll show how Zod can help solve these problems with real-world examples."
3. Build anticipation: "We'll finish with a live demo of end-to-end type safety in action."
-->

---
layout: two-cols
class: flex items-center my-auto
growSeed: 14
themeColor: blue
---

# Joseph Anson

<div class="opacity-80">
Senior Web Consultant at Passionate People<br>
TypeScript Expert & Developer Experience Advocate
</div>

<div my-10 w-min flex="~ gap-1" items-center>
  <div i-ri-user-3-line op50 ma text-xl />
  <div><a href="https://josephanson.com" target="_blank" class="border-none! font-300">josephanson.com</a></div>
  <div i-ri-github-line op50 ma text-xl ml4/>
  <div><a href="https://github.com/josephanson" target="_blank" class="border-none! font-300">josephanson</a></div>
</div>

::right::

<img src="/me2.jpg" rounded-full absolute top-22 right-20 w-80 h-80 object-cover />

<!--
Introduction (30 seconds):
- "Hi everyone, I'm Joseph Anson"
- "I've been working with TypeScript since version 0.8"
- "Currently, I help companies build robust TypeScript applications at Passionate People"

Personal Connection (45 seconds):
- Share brief story: "Last month, I helped a team catch 50 potential runtime errors before deployment"
- "That's what drives me - preventing production issues before they happen"
- "I'm here to share these battle-tested strategies with you"

Call to Connect (15 seconds):
- "You can find me online at josephanson.com"
- "I'm always happy to discuss TypeScript and system architecture"
- "Let's connect after the talk!"

Body Language:
- Stand confidently but relaxed
- Gesture naturally to photo when introducing yourself
- Use open hand gestures when sharing experience
- Smile when inviting connections
-->

---
layout: center
class: text-center flex flex-col justify-between max-w-5xl mx-auto items-center
themeColor: green
growSeed: 8
growOpacity: 0.5
grow: right
---

# The Type Safety Journey

<div class="relative flex justify-center mt-12">
  <!-- Timeline line -->
  <div v-click="1" class="absolute left-0 right-0 top-[66px] transform -translate-y-1/2 h-1px bg-white/20"></div>

  <!-- Timeline items -->
  <div class="flex justify-between items-center">
    <div v-click class="timeline-item">
      <div class="icon-container bg-yellow-400">
        <div i-vscode-icons:file-type-js-official class="text-6xl" />
      </div>
      <div class="timeline-label">
        JavaScript's<br>"Trust Me" Era
      </div>
    </div>
    <div v-click class="timeline-item">
      <div class="icon-container bg-blue-400">
        <div i-vscode-icons:file-type-typescript-official class="text-6xl" />
      </div>
      <div class="timeline-label">TypeScript<br>Compile-Time Safety</div>
    </div>
    <div v-click class="timeline-item">
      <div class="icon-container bg-red-400">
        <div i-ph:shield-warning class="text-6xl" />
      </div>
      <div class="timeline-label">Runtime<br>Validation Gap</div>
    </div>
  </div>
</div>

<div v-click class="text-xl mt-12">
  From implicit trust to bulletproof validation
</div>

<style>
.timeline-item {
  @apply flex flex-col items-center transition-all duration-500;
  opacity: 0;
  transform: translateY(20px);
  transform-origin: 50% 50%;
  scale: 0.9;
}

.icon-container {
  @apply w-30 h-30 rounded-full flex items-center justify-center
         mb-4 shadow-lg transition-transform hover:scale-110;
}

.timeline-label {
  @apply text-lg text-center px-8 font-semibold;
}

.slidev-vclick-target {
  opacity: 1;
  transform: translateY(0);
}

.slidev-vclick-current.timeline-item {
  scale: 1.1;
}
</style>

<!--
Setup (30 seconds):
- "Let's look at how we got here"
- "Our journey with type safety has three distinct phases"
- Wait for timeline animation to begin

JavaScript Era (30 seconds):
- "First, the JavaScript era - the 'trust me' era"
- Share war story: "Remember undefined is not a function?"
- "When typeof null === 'object' was our daily puzzle"

TypeScript Evolution (30 seconds):
- "Then came TypeScript - a game changer"
- "Suddenly we had compile-time safety"
- "Those red squiggly lines became our best friends"

Runtime Gap (30 seconds):
- Build tension: "But we discovered a problem"
- "All our beautiful types disappear at runtime"
- "That's our focus today - bridging this gap"

Audience Engagement:
- "Quick show of hands - who's been bitten by runtime type errors?"
- Use responses to validate the problem
- "Those hands? That's why we're here"

Body Language:
- Move along timeline as you discuss each era
- Use hands to emphasize progression
- Show concern when discussing runtime gap
- React to audience participation
-->

---
layout: two-cols-header
class: items-stretch gap-8
themeColor: green
---

# Real-World Challenges

::left::

<div class="system-architecture">
  <div class="relative h-[300px] top-10">
    <div class="node envs" v-click>
        <div i-ph:gear-duotone class="text-2xl icon" />
        <div class="node-label">Env Variables</div>
      <div class="connection envs-frontend"></div>
    </div>
      <div class="node query" v-click>
        <div i-ph:globe-stand-duotone class="text-2xl icon" />
        <div class="node-label">Params, Query, Headers</div>
      <div class="connection query-frontend"></div>
    </div>
      <div class="node frontend" v-click>
        <div i-ph:globe-stand-duotone class="text-2xl icon" />
        <div class="node-label">Frontend</div>
      <div class="connection frontend-bff"></div>
    </div>
      <div class="node bff" v-click>
        <div i-ph:circuitry-duotone class="text-2xl icon" />
        <div class="node-label">Backend</div>
      <div class="connection bff-service"></div>
    </div>
      <div class="node user-service" v-click>
        <div i-ph:user-circle-duotone class="text-2xl icon" />
        <div class="node-label">User Service</div>
      <div class="connection service-db"></div>
    </div>
    <div class="node service" v-click>
      <div i-ph:credit-card-duotone class="text-2xl icon" />
      <div class="node-label">Third Party<br/>Payment API</div>
    </div>
    <div class="node database" v-click>
      <div i-ph:database-duotone class="text-2xl icon" />
      <div class="node-label">Database</div>
    </div>
    <div class="node frontend !bg-green-500 !border-green-700 z-10" v-click>
      <div i-ph:globe-stand-duotone class="text-2xl icon" />
      <div class="node-label">Frontend</div>
    </div>
  </div>
</div>

::right::

<v-click>

<div class="p-4 border rounded-lg">
  <h3 class="text-green-100 mb-2">Common Pain Points</h3>
  <div class="[&>div]:mt-2 text-sm">
    <div>❌ Missing required fields</div>
    <div>❌ Incorrect data types</div>
    <div>❌ Invalid enum values</div>
    <div>❌ Malformed dates/timestamps</div>
    <div>❌ Security vulnerabilities</div>
  </div>
</div>

<div class="p-4 border rounded-lg mt-4">
  <h3 class="text-green-100 mb-2">The Impact</h3>
  <div class="[&>div]:mt-2 text-sm">
    <div>💸 Data-related bugs are costly</div>
    <div>⏱️ Significant debugging time</div>
    <div>😡 User experience degradation</div>
  </div>
</div>

</v-click>

<style>
.system-architecture {
  @apply relative h-full w-full p-4 bg-gray/10 rounded-xl;
  min-height: 300px;
}

.node {
  @apply absolute w-20 h-20 rounded-2xl flex flex-col items-center
         justify-center bg-gray-800 border-2 border-gray-700
         transition-all duration-300 p-1;
}

.node-label {
  @apply mt-1 text-[13px] text-center;
}

.node .icon {
  @apply text-2xl h-4 w-4 flex-shrink-0;
}

.envs { left: 0%; top: 30% }
.frontend { left: 23%; top: 30% }
.query { left: 23%; top: 0% }
.bff { left: 46%; top: 30% }
.user-service { left: 58%; top: 60% }
.service { left: 58%; top: 0% }
.database { left: 80%; top: 60% }

.connection {
  @apply absolute border-b-2 border-dashed border-gray-600;
  opacity: 0;
}
</style>

<!--
Introduction (20 seconds):
- "Let's look at where things break in real applications"
- "Each connection point here is a potential failure"
- Point to diagram: "This might look familiar to many of you"

Architecture Walkthrough (40 seconds):
- Start at Frontend: "Our TypeScript safe zone"
- Move to API: "First trust boundary"
- Environment Variables: "The silent killers"
- Database: "The source of truth... we hope"

Real Examples (40 seconds):
- "Just last week, a client's app crashed because..."
- "An API started returning nulls instead of empty arrays"
- "An ENV variable was 'true' the string, not true the boolean"
- "A date came as a timestamp string instead of a Date object"

Impact Discussion (40 seconds):
- "Each of these failures costs time and money"
- "Best case: immediate error and quick fix"
- "Worst case: silent data corruption"
- Share specific cost example from experience

Audience Engagement (20 seconds):
- "Who's had an API change break their app?"
- "Anyone here lost hours debugging an ENV issue?"
- Use responses to validate problem space

Body Language:
- Move purposefully between diagram sections
- Use hands to show data flow
- Point to specific failure points
- Show concern when discussing impacts
-->

---
layout: two-cols-header
class: items-stretch gap-8
themeColor: green
---

# The Trust Boundary

::left::

<div class="system-architecture">
  <div class="node frontend safe" v-click>
    <div i-ph:shield-check-duotone class="text-2xl icon" />
    <div class="node-label">Frontend<br/>(TypeScript)</div>
  </div>
  <div class="node api danger" v-click>
    <div i-ph:warning-circle-duotone class="text-2xl icon" />
    <div class="node-label">API</div>
  </div>
  <div class="node db danger" v-click>
    <div i-ph:database-duotone class="text-2xl icon" />
    <div class="node-label">Database</div>
  </div>
  <div class="node query danger" v-click>
    <div i-ph:question-duotone class="text-2xl icon" />
    <div class="node-label">Path \ Query Params</div>
  </div>
  <div class="node env danger" v-click>
    <div i-ph:gear-duotone class="text-2xl icon" />
    <div class="node-label">ENV Vars</div>
  </div>
  <div v-click class="trust-boundary">Trust Boundary</div>
</div>

::right::

<v-click>

```ts {1-5|6-14}
// Inside Frontend: TypeScript keeps us safe
const user: User = {
  id: '123',
  name: 'Alice'
} // ✅ Compile-time check

// Outside Frontend: We just hope these match
const response = await api.getUser()
const user: User = response.data // 😰

const { id } = useRoute().query as { id: string } // 😰

const apiKey = process.env.API_KEY as string // 😰
```

</v-click>

<style>
.system-architecture {
  @apply relative h-full w-full;
  min-height: 300px;
}

.node {
  @apply absolute w-24 h-24 rounded-2xl flex flex-col items-center
         justify-center transition-all duration-300 p-2;
}

.safe {
  @apply bg-green-800/30 border-2 border-green-600;
}

.danger {
  @apply bg-red-800/30 border-2 border-red-600;
}

.node-label {
  @apply mt-1 text-xs text-center;
}

.frontend { left: 7%; top: 20% }
.api { left: 40%; top: 20% }
.db { left: 70%; top: 20% }
.query { left: 40%; top: 60% }
.env { left: 70%; top: 60% }

.trust-boundary {
  @apply absolute left-[2px] text-center top-[26px] h-[150px] w-[150px] rounded-xl p-2 text-sm text-yellow-400 bg-yellow-50/10;
}
</style>

<!--
Setup (30 seconds):
- "This is what I call the Trust Boundary"
- Point to diagram: "Inside, TypeScript protects us"
- "Outside? We're making promises we can't keep"

Code Walkthrough (60 seconds):
- "Let's look at some code"
- Inside boundary:
  - "Here's our safe TypeScript code"
  - "Beautiful type checking"
  - "Compiler has our back"
- Outside boundary:
  - Point to type assertions: "See these 'as' keywords?"
  - "Each one is a leap of faith"
  - "We're telling TypeScript: Trust me"

War Stories (45 seconds):
- Share specific example: "Last month, a production bug..."
- "All because we trusted data across this boundary"
- "Cost the team two days of debugging"

Impact (30 seconds):
- "Every 'as' in your codebase is a red flag"
- "Each type assertion is a potential bug"
- "And TypeScript can't help us here"

Transition (15 seconds):
- "But there's a solution"
- "We can make these boundaries safe"
- Build anticipation for next section

Body Language:
- Use diagram effectively
- Point to specific code sections
- Show contrast between safe/unsafe zones
- Use hands to emphasize boundary
-->

---
layout: center
themeColor: green
---

# The Runtime Validation Gap

```ts {1-8|10-17|all}
// What you expect
interface APIResponse {
  id: string
  amount: number
  currency: 'USD' | 'EUR'
  total: number
  createdAt: Date
}

// What you get
const response = {
  id: 12345, // 😱 Number!
  amount: '19.99', // 😱 String!
  currency: 'YEN', // 😱 Invalid!
  total: '-10', // 😱 Should be positive!
  createdAt: '2025' // 😱 Should be a date!
}
```

<!--
Initial Setup (20 seconds):
- "Let's see this problem in action"
- "Here's a real-world example I encountered recently"
- Wait for code to display

Expectations (30 seconds):
- "First, look at our TypeScript interface"
- "Clean, precise, everything perfectly typed"
- "This is what our code expects"

Reality Check (45 seconds):
- "Now, here's what actually comes from the API"
- Walk through each error:
  - "IDs as numbers instead of strings"
  - "Amounts as strings instead of numbers"
  - "Invalid enum values"
  - "Malformed dates"
  - "Negative values where they should be positive"

Impact Story (45 seconds):
- Share real example: "This exact scenario happened to a client"
- "The bug made it to production"
- "Took down their payment processing for 2 hours"
- "Cost them thousands in lost revenue"

Solution Preview (20 seconds):
- "But we can prevent all of this"
- "With runtime validation"
- "Let me show you how"

Stage Movement:
- Stand to left of code initially
- Point to specific code sections
- Use hands to show contrast between expectation/reality
- Step forward when transitioning to solution
-->

---
layout: two-cols-header
class: items-center
themeColor: indigo
---

# What's Out There?

::left::

There are many validation libraries, to help you:

- Joi
- Yup
- Valibot
- Zod

We'll focus on Zod, because it's the most popular.

::right::

<div v-click class="h-full flex flex-col items-center justify-center">
  <div class="text-green-400 text-8xl mb-4"><span i-logos-zod h-10 w-10 inline-block /></div>
  <div class="text-center">
    <div class="text-2xl font-bold mb-2">Why Zod?</div>
    <div class="opacity-75">
      TypeScript-first design<br>
      Zero dependencies<br>
      Expressive API<br>
      Ecosystem integration
    </div>
  </div>
</div>

<style>
.slidev-layout two-cols {
  gap: 2rem !important;
}
</style>

<!--
Introduction (30 seconds):
- "Let's talk solutions"
- "There are several great validation libraries out there"
- "Each with its own strengths"

Library Overview (30 seconds):
- "Joi - the veteran, battle-tested"
- "Yup - React ecosystem favorite"
- "Valibot - the new, lightweight contender"
- "And Zod - our focus today"

Why Zod (45 seconds):
- "Zod stands out for several reasons:"
- "First, it's TypeScript-first - built from ground up"
- "Zero dependencies - crucial for production"
- "Incredibly expressive API"
- "And fantastic ecosystem support"

Personal Experience (35 seconds):
- Share success story: "Recently implemented Zod in a large enterprise app"
- "Caught 37 type mismatches in first week"
- "Team's confidence in the codebase skyrocketed"

Transition (20 seconds):
- "Let's see it in action"
- "I'll show you some real-world examples"
- Build anticipation for code examples

Body Language:
- Stand centered between columns
- Use hands to list options
- Show enthusiasm for Zod features
- Move smoothly to demo transition
-->

---
layout: center
themeColor: indigo
---

# Zod Fundamentals 🛡️

<div class="grid grid-cols-2 gap-8">
  <div v-click>

```ts
// Schema Definition
const ProductSchema = z.object({
  id: z.string().uuid(),
  price: z.number().positive(),
  variants: z.array(
    z.object({
      size: z.enum(['S', 'M', 'L']),
    })
  )
})

// Type Inference
type Product = z.infer<typeof ProductSchema>
/*
{
  id: string
  price: number
  variants: {
    size: "S" | "M" | "L"
  }[]
}
*/
```

  </div>
  <div v-click>

```ts
// Runtime Validation - No thrown error
const result = ProductSchema.safeParse(data)
if (!result.success) {
  // Detailed error reporting
  console.log(result.error.format())
}
```

```ts
// Runtime Validation - Throws error
try {
  const result = ProductSchema.parse(data) // ❌ Error
}
catch (error) {
  console.error(error)
}
```

  </div>
</div>

<!--
Zod Fundamentals (5 minutes):

1. Introduction (30s):
- "Let's dive into how Zod works in practice"
- "We'll start with a simple but real-world example"

2. Schema Definition (1.5min):
- Walk through ProductSchema structure
- Point out validation rules: uuid, positive number
- Show how nested validation works with variants array
- Emphasize how close it looks to TypeScript types

3. Type Inference (1min):
- "Here's where the magic happens"
- Show how z.infer gets us TypeScript types
- Explain why this is better than manual type definition
- Point out: "No duplication between runtime and compile time"

4. Validation Methods (2min):
- Compare safeParse vs parse
- Explain when to use each:
  - safeParse for API boundaries
  - parse for internal code
- Show error handling patterns
- Demo the detailed error messages

Key Takeaway:
"Zod gives us the best of both worlds - TypeScript's static typing AND runtime validation"
-->

---
themeColor: indigo
---

# Validation in Practice 🛠️

<div class="grid grid-cols-2 gap-8">
  <div v-click>

```ts
// Environment Variables
const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  PORT: z.number().min(1024).max(65535),
  NODE_ENV: z.enum(['development', 'production', 'test'])
})
envSchema.parse(process.env)
```

  </div>
  <div v-click>

```ts
// Query Parameters
const querySchema = z.object({
  page: z.number().min(1).default(1),
  limit: z.number().min(1).max(100).default(10),
  search: z.string().optional()
})
querySchema.parse(req.query)
```

  </div>
  <div v-click>

```ts
// Form Validation with @Shadcn-vue
const formSchema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(8)
})
const form = useForm({
  validationSchema: toTypedSchema(formSchema)
})
```

  </div>
  <div v-click>

```ts
// API Response Validation
const apiSchema = z.object({
  data: z.array(z.object({
    id: z.string(),
    name: z.string(),
  })),
  meta: z.object({
    page: z.number(),
    total: z.number()
  })
})
apiSchema.parse(await fetch('/api/data'))
```

  </div>
</div>

<!--
Speaker Notes for Zod Examples:

1. Query Parameters (30s):
- "Let's start with query params - often overlooked"
- "Notice the defaults and bounds for safety"
- "This prevents common pagination bugs"

2. Form Validation (30s):
- "Forms are where Zod really shines"
- "Integration with Shadcn makes it seamless"
- "Real-time validation improves UX"

3. API Responses (30s):
- "Here's where we close the runtime gap"
- "Notice the nested structure validation"
- "This catches API changes immediately"

Key Message:
"These patterns work across your entire stack"
-->

---
layout: two-cols-header
themeColor: indigo
---

# Ecosystem Integration 🌐
<br>

::left::

<div class="text-sm space-y-4">

  <div v-click>
    <div class="font-bold mb-2">API Validation</div>
    <div class="opacity-75">Seamless integration with frameworks like Express, Fastify, Nitro to validate incoming requests.</div>
  </div>

  <div v-click>
    <div class="font-bold mb-2">Single Source of Truth</div>
    <div class="opacity-75">Zod schemas can be used in the frontend, backend, and generated from your database schema.</div>
  </div>

  <div v-click>
    <div class="font-bold mb-2">Frontend Safety</div>
    <div class="opacity-75">Type-safe forms with React Hook Form, FormKit, Veevalidate, Shadcn, etc.</div>
  </div>
</div>

::right::

<div class="text-sm space-y-4">

  <div v-click>
    <div class="font-bold mb-2">Type-safe API Clients</div>
    <div class="opacity-75">Auto-generate type-safe clients for your API with Zod.</div>
  </div>

  <div v-click>
    <div class="font-bold mb-2">Generate Mocks from Schemas</div>
    <div class="opacity-75">Generate realistic mock data for testing and development.</div>
  </div>

  <div v-click>
    <div class="font-bold mb-2">Database First</div>
    <div class="opacity-75">Generate Zod schemas from your DB schema (Drizzle, Prisma), allowing you to have a single source of truth.</div>
  </div>

</div>

<!--
Ecosystem Integration Notes (2 minutes):

1. API Validation (20s):
- "Zod works with all major Node.js frameworks"
- "Validate incoming requests before they hit your business logic"

2. Single Source of Truth (20s):
- "One schema to rule them all"
- "Frontend, backend, database - all in sync"

3. Frontend Safety (20s):
- "Type-safe forms are a game changer"
- "No more guessing about form data types"

4. Type-safe API Clients (20s):
- "Generate clients that match your API exactly"
- "No more manual type definitions"

5. Mock Data Generation (20s):
- "Realistic test data from your schemas"
- "Great for development and testing"

6. Database First (20s):
- "Generate Zod schemas from your database"
- "Keep your types in sync with your data"

Key Message:
"Zod isn't just a validation library - it's a complete type safety ecosystem"
-->

---
layout: center
themeColor: indigo
---

# Key Benefits 📈

<div class="grid grid-cols-2 gap-4 mt-6">
  <div class="p-4 border rounded-lg bg-green-900/20" v-click>
    <div class="text-green-400 text-2xl mb-2">⬇️ </div>
    <div class="font-bold">Fewer Production Bugs</div>
    <div class="text-sm opacity-75">Runtime validation catches issues pre-deployment</div>
  </div>
  <div class="p-4 border rounded-lg bg-blue-900/20" v-click>
    <div class="text-blue-400 text-2xl mb-2">⏱️ </div>
    <div class="font-bold">Faster Debugging</div>
    <div class="text-sm opacity-75">Detailed error paths & validation messages</div>
  </div>
  <div class="p-4 border rounded-lg bg-purple-900/20" v-click>
    <div class="text-purple-400 text-2xl mb-2">✨ </div>
    <div class="font-bold">DevEx Improvement</div>
    <div class="text-sm opacity-75">Autocomplete & type safety across boundaries</div>
  </div>
  <div class="p-4 border rounded-lg bg-yellow-900/20" v-click>
    <div class="text-yellow-400 text-2xl mb-2">🔄 1:1</div>
    <div class="font-bold">Schema Parity</div>
    <div class="text-sm opacity-75">Single source of truth across all layers</div>
  </div>
</div>

<!--
Key Benefits (2 minutes):

Introduction (30 seconds):
- "Let's summarize the key benefits of using Zod"
- "These are the outcomes we've seen in real projects"

Benefits Walkthrough (1 minute):
- Production Bugs: "Catch issues before they hit production"
- Debugging Speed: "Pinpoint exact validation failures"
- Developer Experience: "Autocomplete and type safety everywhere"
- Schema Parity: "One source of truth across your stack"

Impact Story (30 seconds):
- Share specific metrics: "One team reduced production bugs by 60%"
- "Most importantly, developer confidence skyrocketed"

Body Language:
- Point to each quadrant as you discuss it
- Use confident, assertive gestures
- Make eye contact with different sections of audience
-->

---
layout: center
themeColor: yellow
growSeed: 20
growOpacity: 0.3
grow: full
---

<div class="relative">
  <qr-code class="absolute top-0 right-0" text="https://github.com/josephanson/demo-devworld-2025" error-level="H" scale="3" />

# Live Demo 🚀

<div class="flex justify-between mb-8">
  <div>
    <h2 class="text-2xl mb-4">End-to-End Type Safety</h2>
    <div class="text-sm opacity-75">Scan QR for demo repo</div>
  </div>
</div>

<div class="relative">
  <!-- Flow diagram -->
  <div class="flex justify-center items-center gap-4 mb-8 text-center">
    <div class="node">
      <div i-vscode-icons:file-type-sql class="text-4xl mb-2" />
      <div class="text-sm">Database Schema</div>
    </div>
    <div class="arrow">→</div>
    <div class="node">
      <div i-logos-zod class="text-4xl mb-2" />
      <div class="text-sm">Zod Schemas</div>
    </div>
    <div class="arrow">→</div>
    <div class="node">
      <img src="/nitro-icon.svg" class="w-9 h-9 mb-2" />
      <div class="text-sm">Nitro API</div>
    </div>
    <div class="arrow">→</div>
    <div class="node">
      <div i-logos-nuxt-icon class="text-4xl mb-2" />
      <div class="text-sm">Nuxt Frontend</div>
    </div>
  </div>

  <!-- Validation points -->
  <div class="grid grid-cols-3 gap-4 mt-8">
    <div v-click class="validation-point">
      <div class="font-bold">Schema Generation</div>
      <div class="text-sm opacity-75">DB → Zod schemas</div>
    </div>
    <div v-click class="validation-point">
      <div class="font-bold">API Validation</div>
      <div class="text-sm opacity-75">Request/Response safety</div>
    </div>
    <div v-click class="validation-point">
      <div class="font-bold">Frontend Safety</div>
      <div class="text-sm opacity-75">Form & API client types</div>
    </div>
  </div>
</div>
</div>

<style>
.node {
  @apply p-4 border rounded-lg flex flex-col items-center bg-gray-800/50;
}
.arrow {
  @apply text-4xl self-center text-white/30;
}
.validation-point {
  @apply p-4 border rounded-lg text-center bg-gray-800/30;
}
</style>

<!--
Live Demo (15 minutes):

Setup (2 minutes):
- "Let me show you how this works in practice"
- "I've prepared a full-stack demo application"
- "You can follow along with the QR code"

Flow Walkthrough (3 minutes):
- Database Schema: "Starting with our source of truth"
- Zod Schemas: "Auto-generated from the database"
- API Layer: "Full request/response validation"
- Frontend: "End-to-end type safety"

Validation Points (8 minutes):
- Schema Generation: "Watch how types flow from DB to API"
- API Validation: "See how we catch invalid requests"
- Frontend Safety: "Experience real-time form validation"

Closing (2 minutes):
- Recap the benefits shown
- Address any questions
- Share repository link

Stage Presence:
- Move between sections of the architecture
- Use hands to show data flow
- Keep energy high during demo
- Have fallback slides ready
-->

---
layout: intro
class: text-center
themeColor: blue
---

# Thank You! 🎉

<div class="space-y-4 mt-8">
  <div class="text-2xl font-bold">
    Let's Build Safer Systems Together
  </div>

  <div class="flex justify-center gap-4 text-xl">
    <a href="https://josephanson.com" target="_blank" class="border-none! flex items-center gap-2">
      <div i-ph-browser-duotone class="flex items-center justify-center" /> josephanson.com
    </a>
    <span>|</span>
    <a href="https://github.com/josephanson" target="_blank" class="border-none! flex items-center gap-2">
      <div i-ph-github-logo-duotone class="flex" /> josephanson
    </a>
  </div>

  <div class="mt-6 text-sm opacity-75">
    Slides & Resources:<br>
    <a href="https://josephanson.com/talks/beyond-type-checking"
       class="border-none! text-blue-400 hover:underline">
      josephanson.com/talks/beyond-type-checking
    </a>
  </div>

  <qr-code class="mx-auto" text="https://josephanson.com/talks/beyond-type-checking" error-level="H" scale="1" />

</div>

<!--
Closing (2 minutes):

Thank You (30 seconds):
- "Thank you all for your attention today"
- "I hope you're now equipped to build safer TypeScript applications"
- "Remember: runtime validation is just as important as static types"

Call to Action (30 seconds):
- "The slides and demo code are available at the URL shown"
- "Scan the QR code to get started right away"
- "Feel free to reach out with questions"

Next Steps (30 seconds):
- "Start small - maybe validate one API endpoint"
- "Build up gradually - add validation at each trust boundary"
- "Share your experiences with the community"

Final Message (30 seconds):
- "Together, we can make TypeScript applications truly bulletproof"
- "Thank you for being part of this journey"
- "Let's connect and build safer systems together"

Body Language:
- Stand centered and confident
- Use open, welcoming gestures
- Make eye contact across the room
- End with a warm smile
-->
