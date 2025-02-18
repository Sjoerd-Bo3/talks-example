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
  sans: Montserrat@400,700,900
  # use with `font-serif` css class from UnoCSS
  serif: Open Sans
  # for code blocks, inline code, etc.
  mono: JetBrains Mono
hideWaves: true
addons:
  - slidev-addon-rabbit
rabbit:
  slideNum: true
---

---
layout: intro
---

<div class="relative pb-8">
  <h1 class="!text-8xl !leading-23 !mb-6"> Beyond Type Checking </h1>

  <h2 color-blue-200 pb-4> Building <span v-mark.blue.highlight.delay300 color-white>Bulletproof</span> TypeScript Applications </h2>

  <div class="absolute top-[100%] left-0">
    <div><img src="/devworld-logo.png" class="h-12 pb-2"></div>
    <div text-sm opacity-75>DevWorld Conference 2025</div>
  </div>
</div>

<!--
Hello everyone, welcome to my talk about Beyond Type Checking!

I'm looking forward to sharing with you today how we can make our TypeScript applications truly bulletproof

TypeScript has revolutionized how we write JavaScript, however there's a critical gap between compile-time and runtime. Today, we'll bridge that gap together.
-->

---
layout: center
class: text-center
themeColor: blue
---

# Today's Journey

<div class="grid grid-cols-2 gap-4 mt-8 text-center">
  <div v-click class="p-4 border rounded-lg bg-yellow-900/20">
    <div i-ph:warning-circle-duotone class="text-4xl mb-2 mx-auto" />
    <div class="font-bold">The Problem</div>
    <div class=" opacity-75">Compile-time type safety</div>
  </div>

  <div v-click class="p-4 border rounded-lg bg-blue-900/20">
    <div i-logos-zod class="text-4xl mb-2 mx-auto" />
    <div class="font-bold">The Solution</div>
    <div class=" opacity-75">Runtime validation</div>
  </div>

  <div v-click class="p-4 border rounded-lg bg-purple-900/20">
    <div i-ph:code-duotone class="text-4xl mb-2 mx-auto" />
    <div class="font-bold">Implementation</div>
    <div class=" opacity-75">Real-world examples</div>
  </div>

  <div v-click class="p-4 border rounded-lg bg-green-900/20">
    <div i-ph:rocket-launch-duotone class="text-4xl mb-2 mx-auto" />
    <div class="font-bold">Live Demo</div>
    <div class=" opacity-75">Runtime Validation in Action</div>
  </div>
</div>

<!--
In this session, we'll explore the runtime type safety challenges we face.

I'll show how we can use schema validation can help solve these problems with real-world examples.

We'll finish with a live demo of end-to-end type safety in action.
-->

---
layout: center
class: text-center flex flex-col justify-between max-w-5xl mx-auto items-center
themeColor: green
growSeed: 8
growOpacity: 0.5
grow: right
---

# JS Type Safety Journey

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
      <div class="timeline-label">Runtime<br>Safety Gap</div>
    </div>
  </div>
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
Let's look at how we got here. Our journey with type safety has three distinct phases. First, the JavaScript era—the 'trust me' era. I honestly don't know how we were able to code production apps like this. Then came TypeScript—a game changer. Suddenly, we had compile-time safety, and those red squiggly lines became our best friends. But we discovered a problem: all our beautiful types disappear at runtime. That's our focus today—bridging this gap. Quick show of hands—who's been bitten by runtime type errors? Those hands? That's why we're here.
-->

---
layout: two-cols-header
themeColor: green
---

# Real-World Impact

::left::

<div class="p-3 border rounded-lg bg-red-900/10" v-click>
  <h4 class="mb-2">Common Pain Points</h4>
  <div class="grid gap-1 opacity-75">
    <div>❌ Type coercion errors in API responses</div>
    <div>❌ Unexpected null/undefined values</div>
    <div>❌ Invalid enum values from external systems</div>
    <div>❌ Unable to access data due to security restrictions</div>
    <div>❌ Cross-site scripting (XSS) from unvalidated data </div>
  </div>
</div>

<div class="p-3 border rounded-lg bg-yellow-900/10 mt-4" v-click>
  <h4 class="mb-2">The Cost</h4>
  <div class="grid gap-1 opacity-75">
    <div>💸 Data-related bugs are costly</div>
    <div>⏱️ Significant debugging time</div>
    <div>😡 User experience degradation</div>
    <div>🔒 Potential security risks</div>
  </div>
</div>

::right::

<v-click>

```ts
// Example: API Response Validation
interface User {
  id: string
  email: string
  createdAt: Date
  role: 'ADMIN' | 'USER'
  preferences: { theme: 'light' | 'dark' }
}

// What we receive from API
const apiResponse: User = {
  id: '123', // ✅
  email: 'not-valid', // ❌ Invalid format
  createdAt: '2024-13-45', // ❌ Invalid date
  role: 'admin', // ❌ Wrong case
  preferences: { theme: 'blue' } // ❌ Invalid theme
}

// Runtime errors
apiResponse.email.includes('@') // 💥 Invalid email
new Date(apiResponse.createdAt) // 💥 Invalid date
apiResponse.role === 'ADMIN' // 💥 Case mismatch
```

</v-click>

<!--
These aren't just theoretical problems. Last month, a client's app was silently crashing and not showing critical information because an API returning the status of an application started running null, this was a required field and because of an api change it broke without them knowing.

Each of these failures costs time and money. Best case: immediate error and quick fix. Worst case: silent data corruption.

Who's had an API change break their app? Anyone here lost hours debugging an ENV issue?
-->

---
layout: two-cols
class: items-stretch gap-8
themeColor: green
---

<h1 class="!mb-0">The Trust Boundary</h1>

<div class="system-architecture">
  <div class="node frontend safe" v-click>
    <div i-ph:shield-check-duotone class="text-2xl icon" />
    <div class="node-label">Javascript<br/>Application (Frontend / Backend)</div>
  </div>
  <div class="node frontend safe" v-click="2">
    <div i-ph:shield-check-duotone class="text-2xl icon" />
    <div class="node-label">Typescript<br/>Application (Frontend / Backend)</div>
  </div>
  <div v-click class="trust-boundary">TS Trust Boundary</div>
  <div class="external grid grid-cols-2 gap-4">
    <div class="node api danger" v-click>
      <div i-ph:warning-circle-duotone class="text-2xl icon" />
      <div class="node-label">API</div>
    </div>
    <div class="node db danger" v-click>
      <div i-ph:database-duotone class="text-2xl icon" />
      <div class="node-label">Session / <br> Local Storage</div>
    </div>
    <div class="node query danger" v-click>
      <div i-ph:question-duotone class="text-2xl icon" />
      <div class="node-label">Path \ Query Params</div>
    </div>
    <div class="node env danger" v-click>
      <div i-ph:gear-duotone class="text-2xl icon" />
      <div class="node-label">ENV Vars</div>
    </div>
    <div class="node env danger" v-click>
      <div i-ph:gear-duotone class="text-2xl icon" />
      <div class="node-label">File System</div>
    </div>
    <div class="node env danger" v-click>
      <div i-ph:gear-duotone class="text-2xl icon" />
      <div class="node-label">Form Data</div>
    </div>
  </div>
</div>

::right::

<div class="absolute top-10 left-115" v-click="1">

````md magic-move {at: 2}
```js
// JavaScript's "Trust Me" Era
const user = {
  id: '123',
  name: 'Alice'
} // Let's hope this is a user
```

```ts
// TypeScript's Compile-Time Safety
interface User {
  id: string
  name: string
}

const user: User = {
  id: '123',
  name: 'Alice'
} // ✅ Compile-time check
```

```ts
// TypeScript's Compile-Time Safety
interface User {
  id: string
  name: string
}

// Outside Trust Boundary: We just hope these match
const response = await api.getUser()
const user = response.data as User // 😰
```

```ts
// TypeScript's Compile-Time Safety
interface User {
  id: string
  name: string
}

// Outside Trust Boundary: We just hope these match
const response = await api.getUser()
const user = response.data as User // 😰

const storage = localStorage.getItem('user') // 😰
const user = JSON.parse(storage) as User // 😰
```

```ts
// TypeScript's Compile-Time Safety
interface User {
  id: string
  name: string
}

// Outside Trust Boundary: We just hope these match
const response = await api.getUser()
const user = response.data as User // 😰

const storage = localStorage.getItem('user') // 😰
const user = JSON.parse(storage) as User // 😰

const { id } = useRoute().query as User['id'] // 😰
```

```ts
// TypeScript's Compile-Time Safety
interface User {
  id: string
  name: string
}

// Outside Trust Boundary: We just hope these match
const response = await api.getUser()
const user = response.data as User // 😰

const storage = localStorage.getItem('user') // 😰
const user = JSON.parse(storage) as User // 😰

const { id } = useRoute().query as User['id'] // 😰

const apiKey = process.env.API_KEY as string // 😰
```

```ts
// TypeScript's Compile-Time Safety
interface User {
  id: string
  name: string
}

// Outside Trust Boundary: We just hope these match
const response = await api.getUser()
const user = response.data as User // 😰

const storage = localStorage.getItem('user') // 😰
const user = JSON.parse(storage) as User // 😰

const { id } = useRoute().query as User['id'] // 😰

const apiKey = process.env.API_KEY as string // 😰

const file = fs.readFileSync('user.json') // 😰
const config = JSON.parse(file) as Config // 😰
```

```ts
// TypeScript's Compile-Time Safety
interface User {
  id: string
  name: string
}

// Outside Trust Boundary: We just hope these match
const response = await api.getUser()
const user = response.data as User // 😰

const storage = localStorage.getItem('user') // 😰
const user = JSON.parse(storage) as User // 😰

const { id } = useRoute().query as User['id'] // 😰

const apiKey = process.env.API_KEY as string // 😰

const file = fs.readFileSync('user.json') // 😰
const config = JSON.parse(file) as Config // 😰

const { register } = useForm<User>();
return (
  <input {
    ...register("firstName", { required: true, maxLength: 20 })
    } />
);
```
````

</div>

<style>
.system-architecture {
  @apply relative h-full w-full mt--2;
}

.node {
  @apply w-24 h-24 rounded-2xl flex flex-col items-center
         justify-center p-2 border-2 border-gray-700 bg-gray-800/30;
}

.safe {
  @apply bg-[#367450] border-2 border-green-600;
}

.danger {
  @apply bg-red-800/30 border-2 border-red-600;
}

.node-label {
  @apply mt-1 text-xs text-center;
}

.frontend { position: absolute; left: 7%; top: 60px }
.external { position: absolute; left: 40%; top: 60px }

.trust-boundary {
  @apply absolute left-[2px] text-center top-[26px] h-[150px] w-[150px] rounded-xl p-2 text-sm text-yellow-400 bg-yellow-50/10;
}
</style>

<!--
Firstly lets look at something I call the Trust Boundary. Inside, TypeScript protects us. Outside? We're making promises we can't keep. Every time you're doing one of these things you're losing trust that the application will run correctly.

Let's look at some code. Here's our safe TypeScript code—beautiful type checking, the compiler has our back. Now, outside the boundary: see these 'as' keywords? Each one is a leap of faith. We're telling TypeScript: Trust me, back to the "trust me" phase.

Last month, a production bug cost the team two days of debugging—all because we trusted data across this boundary. Every 'as' in your codebase is a red flag. Each type assertion is a potential bug. And TypeScript can't help us here.
-->

---
themeColor: green
layout: two-cols-narrow
layoutClass: items-center
---

# The Runtime Validation Gap

::right::

````md magic-move
```ts
// Real-world example
interface LoanStatusResponse {
  id: string
  loanStatus: {
    amount: number
    currency: 'USD' | 'EUR'
    status: 'pending' | 'approved' | 'rejected'
    interestRate: number
  }
  total: number
  createdAt: Date
}
```

```ts
// Real-world example
interface LoanStatusResponse {
  id: string
  loanStatus: {
    amount: number
    currency: 'USD' | 'EUR'
    status: 'pending' | 'approved' | 'rejected'
    interestRate: number
  }
  total: number
  createdAt: Date
}

// What you get
const response: LoanStatusResponse = {
  id: '12345',
  loanStatus: null, // 😱 Should be an object!
  total: '0', // 😱 Shouldn't be zero!
  createdAt: '2025-01-01'
}
```
````

<!--
Let's see this problem in action. Here's a real-world example I encountered recently. First, look at our TypeScript interface—clean, precise, everything perfectly typed. This is what our code expects.

Now, here's what actually comes from the API: IDs as numbers instead of strings, amounts as strings instead of numbers, invalid enum values, malformed dates, negative values where they should be positive.

This exact scenario happened to a client—the bug made it to production, took down their payment processing for 2 hours, and cost them thousands in lost revenue. But we can prevent all of this. With runtime validation.

But there's a solution to solve this problem. We can make these boundaries safe. Let's see how.
-->

---
layout: statement
themeColor: green
---

<h1> From Blind Faith to  <span v-mark.green.highlight.delay600="1" color-white> Bulletproof Validation </span> </h1>

<h2> Building Trust Through <span v-mark.green.underline.delay2000="1" color-white>Runtime Validation </span> </h2>

<!--
Today, I want to take you on a journey - from the days of blind faith in our code to building truly bulletproof applications. We'll explore how runtime validation can transform the way we write TypeScript code and protect our applications from those sneaky type errors that slip through at runtime.

I've been working with TypeScript for years, and I've seen firsthand how devastating runtime type errors can be. But I've also discovered powerful solutions that can help us build more reliable applications. That's what I'm excited to share with you today.

By the end of this talk, you'll have practical strategies to protect your TypeScript applications from runtime type errors, making your code more robust and your development process more confident.
-->

---
layout: iframe-right
url: https://standardschema.dev/
themeColor: indigo
scale: 0.7
---

# What's Out There?

<div class="space-y-4">
  <div class="text-lg font-bold mb-4">Schema Validation Libraries</div>
  <div class="grid grid-cols-2 gap-4">
    <v-clicks>
      <div class="p-3 border rounded-lg flex items-center gap-2" :class="$slidev.nav.clicks > 3 ? 'border-green-500 bg-green-500/10' : ''">
        <div i-logos-zod class="text-2xl" />
        <div>Zod</div>
      </div>
      <div class="p-3 border rounded-lg flex items-center gap-2" :class="$slidev.nav.clicks > 3 ? 'border-green-500 bg-green-500/10' : ''">
        <img src="/valibot.png" class="h-8 w-8" />
        <div>Valibot</div>
      </div>
      <div class="p-3 border rounded-lg flex items-center gap-2" :class="$slidev.nav.clicks > 3 ? 'border-green-500 bg-green-500/10' : ''">
        <img src="/arktype.svg" class="h-6 w-6" />
        <div>Arktype</div>
      </div>
    </v-clicks>
  </div>
</div>

<!--
Let's talk solutions. There are several great validation libraries out there, however our focus today will be Zod.

Zod stands out for several reasons: it's TypeScript-first, has zero dependencies, an incredibly expressive API, and fantastic ecosystem support.

Recently, went live with Zod in a large enterprise app—it caught 37 type mismatches in the first week, and the team's confidence in the codebase skyrocketed. Let's see it in action—I'll show you some real-world examples.
-->

---
layout: center
themeColor: indigo
---

# [What is]{.color-indigo-200} Standard Schema?

<div class="grid grid-cols-2 gap-6 mt-6">
  <div class="p-4 border rounded-lg bg-purple-900/20" v-click>
    <div class="font-bold mb-1">Collaborative Initiative</div>
    <div class="opacity-75">Created through collaboration between Zod, Valibot, and ArkType teams</div>
  </div>
  <div class="p-4 border rounded-lg bg-blue-900/20" v-click>
    <div class="font-bold mb-1">Ecosystem Integration</div>
    <div class="opacity-75">Designed for seamless adoption across frameworks and tools</div>
  </div>
  <div class="p-4 border rounded-lg bg-green-900/20" v-click>
    <div class="font-bold mb-1">Universal Standard</div>
    <div class="opacity-75">Unified approach to schema validation across the JavaScript ecosystem</div>
  </div>
  <div class="p-4 border rounded-lg bg-yellow-900/20" v-click>
    <div class="font-bold mb-1">Community-Driven</div>
    <div class="opacity-75">Evolving best practices shaped by real-world implementation</div>
  </div>
</div>

<!--
Choosing a library that supports Standard Schema is increasingly important as the ecosystem evolves. Created by the minds behind Zod, Valibot, and ArkType, it represents where validation is heading.

The key advantage is future-proofing your codebase. As more libraries implement the spec, your validation logic becomes portable. You can switch between libraries without rewriting code, and your tools will work consistently across different validation solutions.

The community aspect is crucial - as adoption grows, we're seeing more shared tooling, documentation, and best practices. This makes it easier to learn, implement, and maintain validation across projects.

Framework creators are also taking notice, with many building Standard Schema support into their tools. This means better integration and a more consistent development experience across the ecosystem.
-->

---
themeColor: indigo
layout: two-cols-narrow
layoutClass: items-center
---

# Schema Validation {.text-indigo-200}
# Why Zod?

::right::
<div class="grid gap-4">
  <div class="flex items-center gap-2">
    <div i-ph:star-duotone class="text-xl text-yellow-400" />
    <div><strong>Popular Choice:</strong> Most widely adopted in the TypeScript ecosystem</div>
  </div>

  <div class="flex items-center gap-2">
    <div i-ph:shield-check-duotone class="text-xl text-green-400" />
    <div><strong>Type Safety:</strong> Seamless TypeScript integration</div>
  </div>

  <div class="flex items-center gap-2">
    <div i-ph:code-duotone class="text-xl text-blue-400" />
    <div><strong>Developer Experience:</strong> Intuitive API and excellent documentation</div>
  </div>

  <div class="flex items-center gap-2">
    <div i-ph:lightning-duotone class="text-xl text-purple-400" />
    <div><strong>Performance:</strong> Optimized for runtime validation</div>
  </div>

  <div class="flex items-center gap-2">
    <div i-ph:users-duotone class="text-xl text-orange-400" />
    <div><strong>Ecosystem:</strong> Rich set of utilities and community support</div>
  </div>
</div>

<!--
I'm not saying you should use Zod, however it is the most widely adopted in the TypeScript ecosystem. I'm saying you should use a library that supports Standard Schema.

It's the popular choice for a reason, it's a great library. Provides type safety, good developer experience and performance.
-->

---
themeColor: indigo
layout: two-cols-header
---

# Schema Fundamentals

::left::

````md magic-move
```ts
type Product = {
  id: string
  price: number
  variants: {
    size: "S" | "M" | "L"
  }[]
}
```

```ts
type Product = {
  id: string
  price: number
  variants: {
    size: "S" | "M" | "L"
  }[]
}

// Schema Definition
const ProductSchema = z.object({
  id: z.string(),
  price: z.number(),
  variants: z.array(
    z.object({
      size: z.enum(['S', 'M', 'L']),
    })
  )
})
```

```ts
type Product = {
  id: string
  price: number
  variants: {
    size: "S" | "M" | "L"
  }[]
}

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
```

```ts
type Product = {
  id: string
  price: number
  variants: {
    size: "S" | "M" | "L"
  }[]
}

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
```

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
````

::right::

<div v-click class="mb-4">

```ts
// Runtime Validation - No thrown error
const result = ProductSchema.safeParse(data)
if (result.success) {
  // Success
  console.log(result.data) // Type Product
}
else {
  // Detailed error reporting
  console.log(result.error.format())
}
```

</div>

<div v-click>

```ts
// Runtime Validation - Throws error
try {
  const result = ProductSchema.parse(data)
  console.log(result) // Type Product
}
catch (error) {
  console.error(error)
}
```

</div>

<!--
Let's dive into how Zod works in practice. We'll start with a simple but real-world example.

First, look at our TypeScript interface—clean, precise, everything perfectly typed. This is what our code expects. Now, here's what actually comes from the API: IDs as numbers instead of strings, amounts as strings instead of numbers, invalid enum values, malformed dates, negative values where they should be positive.

This exact scenario happened to a client—the bug made it to production, took down their payment processing for 2 hours, and cost them thousands in lost revenue. But we can prevent all of this. With runtime validation. Let me show you how.
-->

---
layout: two-cols-header
themeColor: green
---

# Developer Workflows

::left::
<div class="space-y-4">
  <div v-click class="p-4 border rounded-lg bg-blue-900/20">
    <div class="font-bold mb-2">Schema-First Development</div>

```ts
// 1. Define Schema
const todoSchema = z.object({
  title: z.string(),
  completed: z.boolean()
})

// 2. Define Update Schema
const updateTodoSchema = todoSchema.extend({
  title: z.string().min(1).max(100),
})

// 2. Generate Types
type Todo = z.infer<typeof TodoSchema>
type UpdateTodo = z.infer<typeof UpdateTodoSchema>
```

  </div>
</div>

::right::

<div class="space-y-4">
  <div v-click class="p-4 border rounded-lg bg-blue-900/20">
    <div class="font-bold mb-2">Implement Features</div>

```ts
// 3. Implement Features
function getTodo(id: string) {
  const todo = fetch(`/api/todos/${id}`).then(res => res.json())
  return todoSchema.parse(todo)
}

function updateTodo(id: string, data: UpdateTodo) {
  const validatedData = updateTodoSchema.parse(data)
  const updatedTodo = fetch(`/api/todos/${id}`, {
    method: 'PUT',
    body: JSON.stringify(validatedData)
  }).then(res => res.json())
  return updatedTodoSchema.parse(updatedTodo)
}
```

  </div>
</div>

---
themeColor: indigo
---

# Schema Validation in Practice

<div class="grid grid-cols-2 gap-2">
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
// Form Validation with Veevalidate
const userSchema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(8)
})

const form = useForm({
  validationSchema: toTypedSchema(userSchema)
})
```

  </div>
  <div v-click>

```ts
// API Response Validation
const apiSchema = z.object({
  id: z.string(),
  name: z.string(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
})

const response = await fetch('/api/data')
const data = apiSchema.parse(await response.json())
```

  </div>
</div>

<!--
Let's see Zod in action.

First, query params—often overlooked, but notice the defaults and bounds for safety. This prevents common pagination bugs. Forms are where Zod really shines—integration with Shadcn makes it seamless, and real-time validation improves UX. API responses—this is where we close the runtime gap. Notice the nested structure validation—this catches API changes immediately. These patterns work across your entire stack.
-->

---
themeColor: indigo
gridClass: items-center flex-grow-1 pb-20
layoutClass: flex flex-col
---

# Ecosystem Integration

<div class="grid grid-cols-2 gap-4 mt-8 ">

  <div v-click class="p-4 border rounded-lg bg-blue-900/20">
    <div class="font-bold mb-2">API Validation</div>
    <div class="opacity-75">Seamless integration with frameworks like Express, Fastify, Nitro to validate incoming requests.</div>
  </div>

  <div v-click class="p-4 border rounded-lg bg-purple-900/20">
    <div class="font-bold mb-2">Frontend Safety</div>
    <div class="opacity-75">Type-safe forms with React Hook Form, FormKit, Veevalidate, Shadcn, etc.</div>
  </div>

  <div v-click class="p-4 border rounded-lg bg-green-900/20">
    <div class="font-bold mb-2">Single Source of Truth</div>
    <div class="opacity-75">Zod schemas can be used in the frontend, backend, and generated from your database schema.</div>
  </div>

  <div v-click class="p-4 border rounded-lg bg-yellow-900/20">
    <div class="font-bold mb-2">Type-safe API Clients</div>
    <div class="opacity-75">Auto-generate type-safe clients for your API with Zod.</div>
  </div>

  <div v-click class="p-4 border rounded-lg bg-red-900/20">
    <div class="font-bold mb-2">Generate Mocks from Schemas</div>
    <div class="opacity-75">Generate realistic mock data for testing and development.</div>
  </div>

  <div v-click class="p-4 border rounded-lg bg-indigo-900/20">
    <div class="font-bold mb-2">AI Data Generation</div>
    <div class="opacity-75">Use schemas to generate structured data with AI.</div>
  </div>

</div>

<!--
Zod works with all major javascript frameworks—validate incoming requests before they hit your business logic. It's a single source of truth—frontend, backend, database, all in sync. Type-safe forms are a game changer—no more guessing about form data types. Generate type-safe API clients that match your API exactly—no more manual type definitions. Generate realistic mock data from your schemas—great for development and testing. Generate Zod schemas from your database—keep your types in sync with your data. Zod isn't just a validation library—it's a complete type safety ecosystem.
-->

---
themeColor: indigo
---

# Tooling Support

<div class="grid grid-cols-3 gap-4 mt-6">
  <div class="p-4 border rounded-lg" v-click>
    <div class="font-bold mb-2 flex items-center gap-2">
      <div i-carbon-api class="text-xl" />
      API Frameworks
    </div>
    <div class="grid grid-cols-2 gap-2 text-sm opacity-75">
      <div class="flex items-center gap-2">
        <div i-unjs-h3 />
        H3
      </div>
      <div class="flex items-center gap-2">
        <div i-unjs-nitro />
        Nitro
      </div>
      <div class="flex items-center gap-2">
        <div i-logos-trpc />
        tRPC
      </div>
      <div class="flex items-center gap-2">
        <div i-logos-hono />
        Hono
      </div>
      <div class="flex items-center gap-2">
        <div i-carbon-function />
        oRPC
      </div>
      <div class="flex items-center gap-2">
        <div i-logos-graphql />
        GQLoom
      </div>
      <div class="flex items-center gap-2">
        <div i-devicon-express />
        express-zod-api
      </div>
      <div class="flex items-center gap-2 opacity-50">
       and more...
      </div>
    </div>
  </div>

  <div class="p-4 border rounded-lg" v-click>
    <div class="font-bold mb-2 flex items-center gap-2">
      <div i-carbon-document class="text-xl" />
      Form Libraries
    </div>
    <div class="grid grid-cols-2 gap-2 text-sm opacity-75">
      <div class="flex items-center gap-2">
        <div i-logos-react />
        TanStack Form
      </div>
      <div class="flex items-center gap-2">
        <div i-logos-vue />
        Formwerk
      </div>
      <div class="flex items-center gap-2">
        <div i-logos-vue />
        Veevalidate
      </div>
      <div class="flex items-center gap-2">
        <div i-logos-vue />
        Regle
      </div>
      <div class="flex items-center gap-2">
        <div i-devicon-svelte />
        Superforms
      </div>
       <div class="flex items-center gap-2">
        <div i-logos-react />
        React Hook Form
      </div>
      <div class="flex items-center gap-2 opacity-50">
       and more...
      </div>
    </div>
  </div>

  <div class="p-4 border rounded-lg" v-click>
    <div class="font-bold mb-2 flex items-center gap-2">
      <div i-carbon-application class="text-xl" />
      UI Frameworks
    </div>
    <div class="grid grid-cols-2 gap-2 text-sm opacity-75">
      <div class="flex items-center gap-2">
        <div i-logos-qwik />
        Qwik
      </div>
      <div class="flex items-center gap-2">
        <div i-logos-nuxt-icon />
        Nuxt UI
      </div>
      <div class="flex items-center gap-2">
        <div i-logos-deno />
        Mage
      </div>
       <div class="flex items-center gap-2">
        <div i-simple-icons-primevue />
        Primevue
      </div>
      <div class="flex items-center gap-2">
        <div i-simple-icons-shadcnui />
        Shadcn
      </div>
      <div class="flex items-center gap-2">
        <div i-simple-icons-shadcnui />
        Shadcn-vue
      </div>
      <div class="flex items-center gap-2">
        <div i-logos-react />
        renoun
      </div>
      <div class="flex items-center gap-2">
        <div i-logos-vue />
        Nuxt Content
      </div>
      <div class="flex items-center gap-2">
        <div i-devicon-astro />
        Astro Content
      </div>
      <div class="flex items-center gap-2 opacity-50">
       and more...
      </div>
    </div>
  </div>

  <div class="p-4 border rounded-lg" v-click>
    <div class="font-bold mb-2 flex items-center gap-2">
      <div i-carbon-http class="text-xl" />
      HTTP Clients
    </div>
    <div class="grid grid-cols-2 gap-2 text-sm opacity-75">
      <div class="flex items-center gap-2">
        <div i-carbon-data-base />
        upfetch
      </div>
      <div class="flex items-center gap-2">
        <div i-carbon-data-base />
        rest-client
      </div>
      <div class="flex items-center gap-2">
        <div i-carbon-data-base />
        better-fetch
      </div>
      <div class="flex items-center gap-2">
        <div i-carbon-data-base />
        make-service
      </div>
      <div class="flex items-center gap-2 opacity-50">
       and more...
      </div>
    </div>
  </div>

  <div class="p-4 border rounded-lg" v-click>
    <div class="font-bold mb-2 flex items-center gap-2">
      <div i-carbon-tools class="text-xl" />
      Utilities
    </div>
    <div class="grid grid-cols-2 gap-2 text-sm opacity-75">
      <div class="flex items-center gap-2">
        <div i-devicon-typescript />
        T3 Env
      </div>
      <div class="flex items-center gap-2">
        <div i-devicon-react />
        cachified
      </div>
      <div class="flex items-center gap-2">
        <div i-ph:upload-duotone />
        UploadThing
      </div>
      <div class="flex items-center gap-2">
        <div i-devicon-typescript />
        OpenAuth
      </div>
      <div class="flex items-center gap-2">
        <div i-logos-faker />
        zod-schema-faker
      </div>
      <div class="flex items-center gap-2 opacity-50">
       and more...
      </div>
    </div>
  </div>

  <div class="p-4 border rounded-lg" v-click>
    <div class="font-bold mb-2 flex items-center gap-2">
      <div i-ph-flow-arrow-duotone class="text-xl" />
      Routing
    </div>
    <div class="space-y-2 text-sm opacity-75">
      <div class="flex items-center gap-2">
        <div i-logos-react />
        TanStack Router
      </div>
      <div class="flex items-center gap-2">
        <div i-devicon-typescript class="text-lg h-5 w-5" />
        call-api
      </div>
      <div class="flex items-center gap-2">
        <div i-logos-vue />
        Kitbag
      </div>
      <div class="flex items-center gap-2 opacity-50">
       and more...
      </div>
    </div>
  </div>
</div>

<!--
The ecosystem support for standard schemas is extensive. From API frameworks like tRPC and Hono, to form libraries like TanStack Form and React Hook Form, to UI frameworks like Qwik and Nuxt UI. HTTP clients, utilities, and routing solutions all support standard schemas. This means you can use the same schema definition across your entire stack, ensuring type safety and consistency throughout your application.
-->

---
themeColor: yellow
growSeed: 20
growOpacity: 0.3
grow: full
class: flex justify-center items-center
---

<div class="relative w-full">
  <qr-code class="absolute top-0 right-0" text="https://github.com/josephanson/demo-devworld-2025" error-level="H" :scale="5" />

# Live Demo 🚀

<div class="flex justify-between mb-8">
  <div>
    <h2 class="text-2xl mb-4"> Runtime Schema Validation </h2>
    <div class=" opacity-75"> Scan QR for demo repo </div>
  </div>
</div>

<div class="relative">
  <!-- Tooling diagram -->
  <div class="flex items-start gap-4 mb-8 text-center">
    <div class="node">
      <div i-logos-nuxt-icon class="text-4xl mb-2 w-10 h-10" />
      <div class="text-xs">Nuxt</div>
    </div>
    <div class="node">
      <div i-unjs-nitro class="text-4xl mb-2 w-10 h-10" />
      <div class="text-xs">Nitro</div>
    </div>
    <div class="node">
      <div i-logos-zod class="text-4xl mb-2 w-10 h-10" />
      <div class="text-xs">Zod</div>
    </div>
    <div class="node">
      <div i-logos-google-gemini class="text-4xl mb-2 w-10 h-10" />
      <div class="text-xs">Vercel AI with Browser basedGemini</div>
    </div>
  </div>

  <!-- Validation points -->
  <div class="grid grid-cols-3 gap-4 mt-8">
    <div v-click class="p-4 border rounded-lg bg-blue-900/20 text-center">
      <div class="font-bold">API Validation</div>
      <div class="text-xs opacity-75">Request / Response safety with Zod</div>
    </div>
    <div v-click class="p-4 border rounded-lg bg-purple-900/20 text-center">
      <div class="font-bold">Frontend Safety</div>
      <div class="text-xs opacity-75">Form validation with Zod</div>
    </div>
    <div v-click class="p-4 border rounded-lg bg-green-900/20 text-center">
      <div class="font-bold">Data Generation</div>
      <div class="text-xs opacity-75">Generate Data using Zod and AI</div>
    </div>
  </div>

</div>
</div>

<style>
.node {
  @apply flex flex-col items-center w-16
}
.arrow {
  @apply text-4xl self-center text-white/30;
}
.validation-point {
  @apply p-4 border rounded-lg text-center bg-gray-800/30 items-center flex flex-col justify-center;
}
</style>

<!--
Let me show you how this works in practice. I've prepared a full-stack demo application—you can follow along with the QR code. Starting with our source of truth—the database schema. Auto-generated Zod schemas from the database. Full request/response validation at the API layer. End-to-end type safety in the frontend. Watch how types flow from DB to API. See how we catch invalid requests. Experience real-time form validation. The slides and demo code are available at the URL shown—scan the QR code to get started right away. Feel free to reach out with questions.
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
    <div class=" opacity-75">Runtime validation catches issues pre-deployment</div>
  </div>
  <div class="p-4 border rounded-lg bg-blue-900/20" v-click>
    <div class="text-blue-400 text-2xl mb-2">⏱️ </div>
    <div class="font-bold">Faster Debugging</div>
    <div class=" opacity-75">Detailed error paths & validation messages</div>
  </div>
  <div class="p-4 border rounded-lg bg-purple-900/20" v-click>
    <div class="text-purple-400 text-2xl mb-2">✨ </div>
    <div class="font-bold">DevEx Improvement</div>
    <div class=" opacity-75">Autocomplete & type safety across boundaries</div>
  </div>
  <div class="p-4 border rounded-lg bg-yellow-900/20" v-click>
    <div class="text-yellow-400 text-2xl mb-2">🔄 1:1</div>
    <div class="font-bold">Schema Parity</div>
    <div class=" opacity-75">Single source of truth across all layers</div>
  </div>
</div>

<!--
Let's summarize the key benefits of using Zod. Catch issues before they hit production—runtime validation catches issues pre-deployment. Pinpoint exact validation failures—detailed error paths and messages. Autocomplete and type safety everywhere—developer experience improvement. One source of truth across your stack—schema parity. One team reduced production bugs by 60%—most importantly, developer confidence skyrocketed.
-->

---
layout: two-cols
class: flex items-center my-auto
growSeed: 14
themeColor: blue
---

# Thank You!

<div class="mt-8">
  <div class="text-2xl font-bold mb-4">
    Let's Build Safer Systems Together
  </div>

  <div class="flex flex-col gap-4 mb-4">

<div>
  <h4 class="opacity-75">Slides & Resources</h4>
</div>

  <qr-code text="https://josephanson.com/talks/beyond-type-checking" error-level="H" :scale="2"/>

  </div>

  <div class="flex gap-4 text-xl mt-8 items-center">
    <a href="https://josephanson.com" target="_blank" class="border-none! flex items-center gap-2">
      <div i-ph-browser-duotone class="flex items-center justify-center" /> josephanson.com
    </a>
    <span>|</span>
    <a href="https://github.com/josephanson" target="_blank" class="border-none! flex items-center gap-2">
      <div i-ph-github-logo-duotone class="flex" /> josephanson
    </a>
  </div>

</div>

::right::

<img src="/me2.jpg" class="rounded-full absolute top-50% translate-y-[-50%] right-20 w-80 h-80 object-cover" />

<!--
Thank you all for your attention today. I hope you're now equipped to build safer TypeScript applications. Remember: runtime validation is just as important as static types. The slides and demo code are available at the URL shown—scan the QR code to get started right away. Start small—maybe validate one API endpoint. Build up gradually—add validation at each trust boundary. Share your experiences with the community. Together, we can make TypeScript applications truly bulletproof. Thank you for being part of this journey. Let's connect and build safer systems together.
-->
