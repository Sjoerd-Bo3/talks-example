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
  sans: Montserrat
  # use with `font-serif` css class from UnoCSS
  serif: Montserrat
  # for code blocks, inline code, etc.
  mono: JetBrains Mono
  provider: none
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
  <h1 class="!text-8xl !leading-23 !mb-6"> Beyond <br> Type Checking </h1>

  <h2 color-blue-200 pb-4> Building <span v-mark.blue.highlight.delay300 color-white>Bulletproof</span> TypeScript Applications </h2>

  <div class="absolute top-[100%] left-0">
    <div><img src="/devworld-logo.png" class="h-12 pb-2"></div>
    <div text-sm opacity-75>DevWorld Conference 2025</div>
  </div>
</div>

<!--
Hello everyone, welcome to my talk about Beyond Type Checking!

I'm looking forward to sharing with you today how we can make our TypeScript applications truly bulletproof

Today, we'll bridge that gap together and learn to make [click] bulletproof applications together.
-->

---
layout: center
class: text-center
themeColor: blue
---

# Today's Journey

<div class="grid grid-cols-2 gap-4 mt-8 text-center">
  <Card
    v-click
    center
    color="yellow"
    icon="i-ph:warning-circle-duotone"
    iconCenter
    title="The Problem"
    subtitle="Compile-time type safety limitations"
  />

  <Card
    v-click
    center
    color="blue"
    icon="i-logos-zod"
    iconCenter
    title="The Solution"
    subtitle="Runtime validation with Zod"
  />

  <Card
    v-click
    center
    color="purple"
    icon="i-ph:code-duotone"
    iconCenter
    title="Implementation"
    subtitle="Real-world examples"
  />

  <Card
    v-click
    center
    color="green"
    icon="i-ph:share-network-duotone"
    iconCenter
    title="Ecosystem"
    subtitle="Tools & adoption strategies"
  />
</div>

<!--
In this session, [click] we'll explore the compile-time safety limitations we face in TypeScript.

[click] I'll show how schema validation with Zod can help solve these problems.

[click] We'll look at real-world implementation examples to see these concepts in action.

[click] And we'll explore the broader ecosystem and strategies for adoption in your projects.
-->

---
layout: center
class: text-center flex flex-col justify-between max-w-5xl mx-auto items-center
themeColor: blue
growSeed: 8
growOpacity: 0.5
grow: right
---

# [JS]{.color-blue-200} Type Safety [Journey]{.color-blue-200}

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
  @apply text-lg text-center px-8 font-semibold leading-normal;
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
First let's look at how we got here. Our journey with type safety has three distinct phases.

[click] First, the JavaScript era—the 'trust me' era. I honestly don't know how we were able to code production apps like this.

[click] Then came TypeScript—a game changer. Suddenly, we had compile-time safety, and those red squiggly lines became our best friends.

[click] But we discovered a problem: all our beautiful types disappear at runtime. That's our focus today—bridging this gap.

Quick show of hands—who's been bitten by runtime type errors? Those hands? That's why we're here.
-->

---
layout: center
themeColor: blue
---

# [Where Things]{.color-blue-200} Go Wrong

<NumberList
  class="mt-12"
  cols="3"
  :features="[
  {
    title: 'The Vanishing Act',
    description: 'TypeScript types disappear at runtime, leaving no safety net for real-world data'
  },
  {
    title: 'The API Illusion',
    description: 'API responses often don\'t match their types, leading to silent failures'
  },
  {
    title: 'The Casting Trap',
    description: 'Overusing `as` or generics bypasses type checks, creating false confidence'
  }
]" />

<!--
Let's break down the three biggest pitfalls in TypeScript applications:

[click] First, **The Vanishing Act**: TypeScript types are erased at runtime, so even if your code compiles, it can still crash when it encounters unexpected data.

[click] Next, **The API Illusion**: APIs often return data that doesn't match the types you've defined. A missing field or unexpected null can break your app.

[click] Finally, **The Casting Trap**: Using `as` to force type assertions bypasses TypeScript's checks, masking real issues and creating a false sense of security.

These are the cracks where bugs slip through. Runtime validation is the solution.
-->

---
layout: two-cols
class: items-stretch gap-8
themeColor: blue
---

<h1 class="!mb-0"><span class="color-blue-200">The</span> Trust Boundary</h1>

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
const response = await fetch('/user')
const user = response.json() as User // 😰
```

```ts
// TypeScript's Compile-Time Safety
interface User {
  id: string
  name: string
}

// Outside Trust Boundary: We just hope these match
const response = await fetch('/user')
const user = response.json() as User // 😰

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
const response = await fetch('/user')
const user = response.json() as User // 😰

const storage = localStorage.getItem('user') // 😰
const user = JSON.parse(storage) as User // 😰

const params = new URLSearchParams(window.location.search)
const id = params.get('id') as string // 😰
```

```ts
// TypeScript's Compile-Time Safety
interface User {
  id: string
  name: string
}

// Outside Trust Boundary: We just hope these match
const response = await fetch('/user')
const user = response.json() as User // 😰

const storage = localStorage.getItem('user') // 😰
const user = JSON.parse(storage) as User // 😰

const params = new URLSearchParams(window.location.search)
const id = params.get('id') as string // 😰

const apiKey = process.env.API_KEY as string // 😰
```

```ts
// TypeScript's Compile-Time Safety
interface User {
  id: string
  name: string
}

// Outside Trust Boundary: We just hope these match
const response = await fetch('/user')
const user = response.json() as User // 😰

const storage = localStorage.getItem('user') // 😰
const user = JSON.parse(storage) as User // 😰

const params = new URLSearchParams(window.location.search)
const id = params.get('id') as string // 😰

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
const response = await fetch('/user')
const user = response.json() as User // 😰

const storage = localStorage.getItem('user') // 😰
const user = JSON.parse(storage) as User // 😰

const params = new URLSearchParams(window.location.search)
const id = params.get('id') as string // 😰

const apiKey = process.env.API_KEY as string // 😰

const file = fs.readFileSync('user.json') // 😰
const config = JSON.parse(file) as Config // 😰

const { register, values } = useForm<User>();
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
[click] Firstly let's start with a javascript application where there's no trust. A user is a user because it's named user.

[click] Now lets look at something I call the Trust Boundary. Inside, TypeScript protects us. Inside typescript protects us from creating runtime issues.

[click] Any api call we make can lead to a runtime error.

[click] Local or Session Storage

[click] Path or Query Params

[click] ENV Vars

[click] File System

[click] Form Data

Any other data that comes from outside the application and crosses the trust boundary can lead to runtime errors.

We're making promises we can't keep.  Each one is a leap of faith. We're telling TypeScript: Trust me, back to the "trust me" phase.
-->

---
layout: two-cols-narrow
themeColor: blue
layoutClass: items-center
---

# [Why This]{.color-blue-200} <br> Matters

::right::

<div class="grid gap-4">

  <Card
    v-click
    color="yellow"
    title="The Cost of Assumptions"
    subtitle="Silent Failures, Loud Consequences"
    icon="i-ph:warning-circle-duotone"
  >
    <div class="opacity-75 text-xs">
      Mismatched data leads to crashes, corrupted state, and costly debugging
    </div>
  </Card>

 <Card
    v-click
    color="red"
    title="The Illusion of Safety"
    subtitle="Compile-time ≠ Runtime Safety"
    icon="i-ph:shield-warning-duotone"
  >
    <div class="opacity-75 text-xs">
      TypeScript's types vanish at runtime, leaving critical gaps in data validation
    </div>
  </Card>

  <Card
    v-click
    color="green"
    title="The Safety Net"
    subtitle="Catching Errors Early"
    icon="i-ph:shield-check-duotone"
  >
    <div class="opacity-75 text-xs">
      Runtime validation acts as a safety net, preventing type-related crashes in production
    </div>
  </Card>
</div>

<!--
[click] Let's talk about why this matters. First, the cost of assumptions - when we assume our data matches our types, we're setting ourselves up for silent failures that have loud consequences.
 
[click] Second, there's this illusion of safety that TypeScript provides, compile time safety doesn't equal runtime safet. We feel protected, but those compile-time checks disappear at runtime, leaving critical gaps in our validation strategy.

[click] Finally, runtime validation acts as our safety net. It catches errors early, before they can cascade into larger problems in production.

These aren't abstract concerns - I've seen teams lose days of productivity and significant revenue because they trusted TypeScript alone to protect their applications. Runtime validation is essential for truly bulletproof applications.
-->

---
themeColor: cyan
layout: two-cols-narrow
layoutClass: items-center
---

# [The Runtime Validation]{.color-cyan-200} Gap

::right::

````md magic-move
```ts
// Real-world example
interface LoanStatusResponse {
  id: string
  loanStatus: {
    status: 'MANUAL_REVIEW' | 'APPROVED' | 'REJECTED'
    interestRate: number
    total: number
  }
}
```

```ts
// Real-world example
interface LoanStatusResponse {
  id: string
  loanStatus: {
    status: 'MANUAL_REVIEW' | 'APPROVED' | 'REJECTED'
    interestRate: number
    total: number
  }
}

// What you get
const response: LoanStatusResponse = {
  id: '12345',
  loanStatus: undefined, // 😱 Should be an object!
}

/*
Application Crashes
- No indication of what went wrong
- No way to recover
- No reporting as it's not caught at compile time
- "technically impossible" as loanStatus is required
*/

```
````

<!--
Let's see this problem in action. Here's a real-world example I encountered recently. First, look at our TypeScript interface—clean, precise, everything perfectly typed. This is what our code expects.

This is from a real application that I was building for a client which we were able to catch with runtime validation.

Our users were applying for a loan and we were showing them the status of their application. However suddenly for some customers the loan status was returning null, which lead to a runtime error and the users we being shown a broken page with no way to recover.

We had no users reporting this issue, however because we were validating the data at runtime we were able to catch it immediately in our logs and fix it.
-->

---
layout: two-cols
themeColor: cyan
layoutClass: items-center
---

# [Real-World]{.color-cyan-200} Impact

<FeatureList
  class="mt-8"
  clicks
  :features="[
    {
      icon: 'i-ph:currency-dollar-duotone',
      color: 'text-yellow-400',
      title: 'Data-related bugs are costly',
      description: 'Direct financial impact from production issues'
    },
    {
      icon: 'i-ph:timer-duotone',
      color: 'text-yellow-400',
      title: 'Significant debugging time',
      description: 'Hours spent tracking down type-related issues'
    },
    {
      icon: 'i-ph:smiley-sad-duotone',
      color: 'text-yellow-400',
      title: 'User experience degradation',
      description: 'Broken features and unexpected behavior'
    },
    {
      icon: 'i-ph:lock-duotone',
      color: 'text-yellow-400',
      title: 'Potential security risks',
      description: 'Vulnerabilities from incorrect data handling'
    }
  ]"
/>

::right::

<v-click>

````md magic-move
```ts
interface User {
  age: number
  role: 'ADMIN' | 'USER'
  isActive: boolean
}

const response = await fetch<User>('/api/user')
```

```ts
interface User {
  age: number
  role: 'ADMIN' | 'USER'
  isActive: boolean
}

const response = await fetch<User>('/api/user')
// What we receive from API
/*
const response: User = {
  age: '25',
  role: 'GUEST',
  isActive: 'true'
}
*/
```

```ts
interface User {
  age: number
  role: 'ADMIN' | 'USER'
  isActive: boolean
}

const response = await fetch<User>('/api/user')
// What we receive from API
/*
const response: User = {
  age: '25', // ❌ String instead of number
  role: 'GUEST', // ❌ Undefined role
  isActive: 'true' // ❌ String instead of boolean
}
*/

// Valid TypeScript, Runtime errors
response.age > 18 // 💥 String vs number comparison
response.role === 'ADMIN' // 💥 Undefined role
if (response.isActive) { /* 💥 String vs boolean */ }
```
````
</v-click>

<!--
Let's examine the real-world impact of TypeScript's limitations.

[click] Data-related bugs are costly, with direct financial impact from production issues.

[click] They lead to significant debugging time, with hours spent tracking down type-related issues.

[click] User experience suffers through broken features and unexpected behavior.

[click] And there are potential security risks from vulnerabilities caused by incorrect data handling.

[click] Here we have a simple User interface with three properties: age as a number, role as a union type, and isActive as a boolean. At compile time, TypeScript is perfectly happy with this.

[click] But what happens when we fetch data from an API? The server might send us strings instead of numbers, invalid enum values, or string representations of booleans. TypeScript has no way to validate this at runtime because the type information is erased during compilation.

[click] When we try to use this data, we encounter serious problems. Comparing a string "25" with a number 18 produces unexpected results. Checking for an "ADMIN" role fails because we received "GUEST" instead. And treating the string "true" as a boolean can lead to subtle logic errors.


This is precisely why we need runtime validation to complement TypeScript's compile-time checks.
-->

---
layout: statement
themeColor: indigo
---

<h1> <span class="color-indigo-200">From Blind Faith to</span> <br> <span v-mark.indigo.highlight.delay600="1" color-white> Bulletproof Validation </span> </h1>

<h2> Building Trust Through <span v-mark.indigo.underline.delay2000="1" color-white>Runtime Validation </span> </h2>

<!--
Let me show you how we can move from blind faith in our types to bulletproof validation through runtime checks. This shift is essential for building truly reliable applications.

-->

---
layout: center
themeColor: indigo
---

# [What is]{.color-indigo-200} Runtime Validation?

<NumberList
  class="mt-12"
  cols="3"
  :features="[
  {
    title: 'Runtime Verification',
    description: 'Verification of data types, structure, and constraints at runtime'
  },
  {
    title: 'External Guards',
    description: 'Guard rails for external data like APIs, DB results, user input'
  },
  {
    title: 'Early Warning',
    description: 'Early detection of mismatches, preventing deeper errors'
  }
]" />

<!--

[click] First, runtime validation is fundamentally about verification. Instead of blindly accepting data, we actively check its shape, types, and constraints at the moment it enters our application. This prevents type-related bugs from spreading through our system.

[click] Second, it creates essential guard rails for external data. APIs, databases, user inputs - all these external sources need validation before we can trust them in our core logic.

[click] Finally, it provides early warning detection. By catching mismatches at the boundary of your application, you prevent deeper, more complex errors from occurring downstream where they're harder to diagnose.

It's like having a security guard checking IDs at every entrance of your application. When data enters your system - whether from an API, user input, or database - it gets verified against your defined rules. This catches issues immediately, before they can cause problems deeper in your application. Think of it as your first line of defense against bad data.
-->

---
layout: iframe-right
url: https://standardschema.dev/
themeColor: indigo
scale: 0.6
---

# [What's]{.color-indigo-200} <br> Out There?

<div class="space-y-4">
  <div class="text-lg font-bold mb-4">Runtime Validation Libraries</div>
  <div class="grid grid-cols-2 gap-4">
    <div v-click class="p-3 border rounded-lg flex items-center gap-2" :class="$slidev.nav.clicks > 5 ? 'border-green-500 bg-green-500/10' : ''">
      <div i-logos-zod class="text-2xl" />
      <div>Zod</div>
    </div>
    <div v-click class="p-3 border rounded-lg flex items-center gap-2" :class="$slidev.nav.clicks > 5 ? 'border-green-500 bg-green-500/10' : ''">
      <img src="/valibot.png" class="h-8 w-8" />
      <div>Valibot</div>
    </div>
    <div v-click class="p-3 border rounded-lg flex items-center gap-2" :class="$slidev.nav.clicks > 5 ? 'border-green-500 bg-green-500/10' : ''">
      <img src="/arktype.svg" class="h-6 w-6" />
      <div>Arktype</div>
    </div>
    <div v-click class="p-3 border rounded-lg flex items-center gap-2" >
      <img src="/joi.png" class="h-6 w-6" />
      <div>Joi</div>
    </div>
    <div v-click class="p-3 border rounded-lg flex items-center gap-2">
      <div>Yup</div>
    </div>
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

  <Card
    v-click
    color="green"
    title="Universal Standard"
    subtitle="Unified approach to schema validation across the JavaScript ecosystem"
  />

  <Card
    v-click
    color="purple"
    title="Collaborative Initiative"
    subtitle="Created through collaboration between Zod, Valibot, and ArkType teams"
  />

  <Card
    v-click
    color="blue"
    title="Ecosystem Integration"
    subtitle="Designed for seamless adoption across frameworks and tools, by providing a standard interface for library authors"
  />

  <Card
    v-click
    color="yellow"
    title="Community-Driven"
    subtitle="Evolving best practices shaped by real-world implementation"
  />
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

<FeatureList
  clicks
 :features="[
  {
    icon: 'i-ph:star-duotone',
    color: 'text-yellow-400',
    title: 'Popular Choice',
    description: 'Most widely adopted in the TypeScript ecosystem'
  },
  {
    icon: 'i-ph:shield-check-duotone',
    color: 'text-green-400',
    title: 'Type Safety',
    description: 'Very Simple Type Inference'
  },
  {
    icon: 'i-ph:code-duotone',
    color: 'text-blue-400',
    title: 'Developer Experience',
    description: 'Intuitive API and excellent documentation'
  },
  {
    icon: 'i-ph:users-duotone',
    color: 'text-orange-400',
    title: 'Ecosystem',
    description: 'Rich set of utilities and community support'
  },
    {
    icon: 'i-ph:wrench-duotone',
    color: 'text-indigo-400',
    title: 'Functionality',
    description: 'Used for validation, transformations, data generation, and more'
  }
]" />

<!--
While there are several validation libraries available, Zod has emerged as a leader for good reasons. Its popularity isn't just about being first - it's about being comprehensive and well-designed. The seamless TypeScript integration means you get excellent IDE support and type inference. The API is intuitive enough that new team members can get started quickly. And perhaps most importantly, it's fast - validation overhead is minimal, making it suitable for production use.
-->

---
themeColor: indigo
layout: two-cols
---

# [Zod]{.text-indigo-200} <br> Essentials

<p v-click> All of the zod utilities are available in the <code>z</code> object returned by the <code>zod</code> library. </p>

<div class="text-[15px] !mt-2" v-click="2">

````md magic-move {at:3}
```ts
// zod types
z.string();
z.number();
z.bigint();
z.boolean();
z.date();
z.array(z.string());
z.object({
  name: z.string(),
  age: z.number()
});
z.symbol();
z.undefined();
z.null();
z.any();
z.unknown();
z.never();
```

```ts
// zod types with validation and transformations
z.string().email().trim();
z.number().positive().max(100).multipleOf(5);
z.bigint().min(12);
z.boolean();
z.date().min(new Date('2024-01-01'));
z.array(z.string()).min(1).max(10);
z.object({
  name: z.string(),
  age: z.number(),
}).strict();
z.symbol();
z.undefined();
z.null();
z.any();
z.unknown();
z.never();
```
````

</div>

::right::

<div class="grid grid-cols-1 gap-4">

<Card
  v-click="4"
  color="blue"
  title="Schema Definition"
  subtitle="Craft a schema to represent any data structure"
>

```ts {all}{class:'!children:text-[10px]  !children:leading-none'}
const userSchema = z.object({
  name: z.string().trim(),
  age: z.number().min(18).max(100),
  email: z.string().email().optional(),
  role: z.enum(['USER', 'ADMIN']),
  address: z.object({
    street: z.string(),
    city: z.string().min(1).max(50),
  })
})
```
</Card>

<Card
  v-click="5"
  color="green"
  title="Type Inference"
  subtitle="TypeScript infers the type of the validated data"
>

```ts {all}{class:'!children:text-[10px]  !children:leading-none'}
type User = z.infer<typeof UserSchema>
/* => {
   name: string,
   age: number,
   email?: string,
   address: { street: string, city: string },
   role: 'USER' | 'ADMIN'
}
*/
```

</Card>

</div>

<!--
Type inference is one of Zod's most powerful features. Instead of maintaining separate type definitions,
we can derive them directly from our schemas. This means:

1. No more manual type updates when schemas change
2. Perfect alignment between runtime validation and compile-time types
3. Reduced maintenance burden and fewer opportunities for errors

This is especially valuable in larger codebases where keeping types and validation in sync can become challenging.
-->

---
themeColor: indigo
---

# [Zod]{.text-indigo-200} <br> Validation

<div class="grid grid-cols-2 gap-4">

<Card
  v-click
  color="green"
  title=".parse()"
  subtitle="Returns typed data when successful or throws an error when validation fails"
>
<p class="text-xs m-0">

```ts {all}{class:'!children:text-[10px]  !children:leading-none'}
try {
  const result = userSchema.parse(data) // => Type User
  return result
}
catch (error) {
  // handle error
  if (error instanceof z.ZodError) {
    logger.analyticsError(error)
  }
}
```

</p>
</Card>

<Card
  v-click
  color="yellow"
  title=".safeParse()"
  subtitle="Returns result pattern, after checking .success access to data is possible, otherwise error is available"
>

```ts {all}{class:'!children:text-[10px]  !children:leading-none'}
const result = userSchema.safeParse(data)
// => { success: true, data: User }
//  | { success: false, error: ZodError }

if (!result.success) {
  logger.analyticsError(result.error)
  return
  // ❌ result.data does not exist, because it failed
}

return result.data // => Type User
```

</Card>

</div>

<style>
  p{margin: 0 !important;}
</style>

<!--
Zod's advanced features allow for complex type definitions and validation patterns. The type inference system ensures your runtime validation stays in sync with your TypeScript types.
-->

---
themeColor: indigo
layout: two-cols-header
---

# [Zod]{.text-indigo-200} In Practice

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
  ).min(1)
})
```

```ts
// Schema Definition
const productSchema = z.object({
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

<div v-click="4" class="mb-0" >

````md magic-move {at:5}
```ts
// Runtime Validation - No thrown error
async function fetchProduct(id: string): Promise<Product> {
}
```

```ts
// Runtime Validation - No thrown error
async function fetchProduct(id: string): Promise<Product> {
  const response = await fetch(`/api/product/${id}`)
  const data = await response.json() as Product
}
```

```ts
// Runtime Validation - No thrown error
async function fetchProduct(id: string): Promise<Product> {
  const response = await fetch(`/api/product/${id}`)
  const data = await response.json() as unknown
  const result = productSchema.safeParse(data)
}
```

```ts
// Runtime Validation - No thrown error
async function fetchProduct(id: string): Promise<Product> {
  const response = await fetch(`/api/product/${id}`)
  const data = await response.json() as unknown
  const result = productSchema.safeParse(data)
  if (!result.success) {
    // ❌ We need to handle this error
    logger.error(
      'Invalid product data',
      result.error.format()
    )
    throw new Error('Invalid product data')
  }
}
```

```ts
// Runtime Validation - No thrown error
async function fetchProduct(id: string): Promise<Product> {
  const response = await fetch(`/api/product/${id}`)
  const data = await response.json() as unknown
  const result = productSchema.safeParse(data)
  if (!result.success) {
    // ❌ We need to handle this error
    logger.error(
      'Invalid product data',
      result.error.format()
    )
    throw new Error('Invalid product data')
  }
  
  return result.data
}
```
````

</div>

<!--
Let's dive into how Zod works in practice. We'll start with a simple but real-world example.

First, look at our TypeScript interface—clean, precise, everything perfectly typed. This is what our code expects. Now, here's what actually comes from the API: IDs as numbers instead of strings, amounts as strings instead of numbers, invalid enum values, malformed dates, negative values where they should be positive.

This exact scenario happened to a client—the bug made it to production, took down their payment processing for 2 hours, and cost them thousands in lost revenue. But we can prevent all of this. With runtime validation. Let me show you how.
-->

---
layout: center
themeColor: indigo
---

# [Schema-Driven]{.color-indigo-200} Types

<NumberList
  class="mt-12"
  :cols="3"
  :features="[
    {
      title: 'Automatic Type Generation',
      description: 'Use z.infer<typeof Schema> to automatically generate TypeScript types'
    },
    {
      title: 'Single Source of Truth',
      description: 'Schema changes automatically reflect in TypeScript types, ensuring perfect sync'
    },
    {
      title: 'DRY Principle',
      description: 'Eliminate duplication between runtime validation and type declarations'
    }
  ]"
/>

<!--
Type inference is one of Zod's most powerful features. Instead of maintaining separate type definitions,
we can derive them directly from our schemas. This means:

1. No more manual type updates when schemas change
2. Perfect alignment between runtime validation and compile-time types
3. Reduced maintenance burden and fewer opportunities for errors

This is especially valuable in larger codebases where keeping types and validation in sync can become challenging.
-->

---
layout: two-cols-narrow
themeColor: indigo
---

# [Beyond]{.color-indigo-200} Basics

<div class="text-sm">

<v-clicks at="2">

- **Validate API Bodies** with `nitro`
- **Mock Generation** with libraries like `zod-schema-faker`
- **Form Builders** hooking into real-time validation with `Veevalidate`
- **Generate Structured Data** with `vercel ai`
- **Validate LocalStorage Data**

</v-clicks>

</div>

::right::

<v-click at="1">

```ts
// Example: Reusable User Schema
export const userSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  email: z.string().email()
})
```

</v-click>

<v-click at="2">

````md magic-move {at:3}
```ts
// Example: Validate API Bodies with Nitro
import { userSchema } from './'
import { z } from 'zod'
import { defineEventHandler, readValidatedBody } from "h3";

return default defineEventHandler(async (event) => {
  const query = await readValidatedBody(event, userSchema.parse);

  return `Hello ${query.name}! This is your email ${query.email}.`;
})
```

```ts
// Example: Generate mock data
import { userSchema } from './'
import { z } from 'zod'
import { fake } from 'zod-schema-faker'

// Generate a mock user
const mockUser = fake(userSchema)
```

```vue
// Example: Form Validation with Veevalidate
<script setup>
import { userSchema } from './'
import { z } from 'zod'
import { toTypedSchema } from '@vee-validate/zod'

const form = useForm({
  validationSchema: toTypedSchema(userSchema)
})

const [name, nameAttrs] = defineField('name');
const [email, emailAttrs] = defineField('email');
</script>

<template>
  <input v-model="name" v-bind="nameAttrs" />
  <div>{{ errors.name }}</div>
  <input v-model="email" v-bind="emailAttrs" />
  <div>{{ errors.email }}</div>
</template>

```

```ts
// Example: Generate Structured Data with AI
import { userSchema } from './'
import { z } from 'zod'
import { generateObject } from "ai";
import { anthropic } from "@ai-sdk/anthropic";

const user = await generateObject({
  model: anthropic('claude-3-5-sonnet-20240620'),
  schema: userSchema,
  prompt: 'Generate a user with a interesting name and email'
})
```

```ts
// Example: Validate LocalStorage User Data
import { userSchema } from './'
import { z } from 'zod'

// Safe set to localStorage
function setStoredUser(user) {
  const validated = userSchema.parse(user)
  localStorage.setItem('userData', JSON.stringify(validated))
}
```
````

</v-click>

<!--
Let's explore how Zod integrates with various tools and frameworks in the ecosystem:

1. API frameworks to form libraries, UI components to testing utilities - there's robust support across the JavaScript ecosystem. This means you're not just adopting a validation library - you're plugging into a complete ecosystem of tools and best practices. Whether you're building APIs with tRPC, forms with React Hook Form, or generating mock data for tests, there's a tool that integrates seamlessly with your schema definitions.

2. Frontend Forms:
   - Integrates with popular form libraries
   - Provides real-time validation feedback
   - Ensures type safety from backend to frontend

3. Mock Data:
   - Generate realistic test data
   - Maintain data consistency in tests
   - Speed up development

4. Single Source of Truth:
   - Define schemas once, use everywhere
   - Generate types automatically
   - Maintain consistency across your stack

5. API Clients:
   - Generate type-safe API clients
   - Automatic request/response validation
   - Better developer experience

6. AI Integration:
   - Use schemas to structure AI-generated data
   - Ensure AI outputs match your types
   - Combine validation with AI capabilities
-->

---
themeColor: indigo
gridClass: items-center flex-grow-1 pb-20
layoutClass: flex flex-col
---

# Ecosystem Integration

<div class="grid grid-cols-2 gap-4 mt-8">
   <Card
    v-click
    icon="i-ph-number-one-duotone"
    color="green"
    title="Single Source of Truth"
    subtitle="Zod schemas can be used in the frontend, backend, and generated from your database schema."
  />

 <Card
    v-click
    icon="i-solar-clipboard-check-bold-duotone"
    color="blue"
    title="API Validation"
    subtitle="Seamless integration with frameworks like Express, Fastify, Nitro, Hono to validate incoming requests."
  />

  <Card
    v-click
    icon="i-ph-newspaper-clipping-duotone"
    color="purple"
    title="Frontend Safety"
    subtitle="Type-safe forms with React Hook Form, FormKit, Veevalidate, Shadcn, etc."
  />

  <Card
    v-click
    icon="i-ph-code-duotone"
    color="yellow"
    title="Schema Transformations"
    subtitle="Transform, parse and validate data between different formats and structures."
  />

  <Card
    v-click
    icon="i-solar-database-bold-duotone"
    color="red"
    title="Generate Mocks from Schemas"
    subtitle="Generate realistic mock data for testing and development."
  />

  <Card
    v-click
    icon="i-ph-head-circuit-duotone"
    color="indigo"
    title="AI Structured Data Generation"
    subtitle="Use schemas to generate structured data with AI."
  />
</div>

<!--
Zod works with all major javascript frameworks—validate incoming requests before they hit your business logic. It's a single source of truth—frontend, backend, database, all in sync. Type-safe forms are a game changer—no more guessing about form data types. Generate type-safe API clients that match your API exactly—no more manual type definitions. Generate realistic mock data from your schemas—great for development and testing. Generate Zod schemas from your database—keep your types in sync with your data. Zod isn't just a validation library—it's a complete type safety ecosystem.
-->

---
themeColor: indigo
---

# [Tooling]{.color-indigo-200} Support

<div class="grid grid-cols-3 gap-4 mt-6">
  <Card icon="i-carbon-api" color="blue" title="API Frameworks" v-click>
    <IconList class="text-sm" :items="[
      { icon: 'i-unjs-h3', label: 'H3' },
      { icon: 'i-unjs-nitro', label: 'Nitro' },
      { icon: 'i-logos-trpc', label: 'tRPC' },
      { icon: 'i-logos-hono', label: 'Hono' },
      { icon: 'i-carbon-function', label: 'oRPC' },
      { icon: 'i-logos-graphql', label: 'GQLoom' },
      { icon: 'i-devicon-express', label: 'express-zod-api' },
      { icon: 'i-logos-nestjs', label: 'NestJS' }
    ]" />
  </Card>

  <Card color="purple" icon="i-carbon-document" title="Form Libraries" v-click>
    <IconList class="text-sm" :items="[
      { icon: 'i-logos-react', label: 'TanStack Form' },
      { icon: 'i-logos-vue', label: 'Formwerk' },
      { icon: 'i-logos-vue', label: 'Veevalidate' },
      { icon: 'i-logos-vue', label: 'Regle' },
      { icon: 'i-devicon-svelte', label: 'Superforms' },
      { icon: 'i-logos-react', label: 'React Hook Form' },
      { icon: 'i-logos-vue', label: 'FormKit' }
    ]" />
  </Card>

  <Card color="green" icon="i-carbon-application" title="UI Frameworks" v-click>
    <IconList class="text-sm" :items="[
      { icon: 'i-logos-qwik', label: 'Qwik' },
      { icon: 'i-logos-nuxt-icon', label: 'Nuxt UI' },
      { icon: 'i-logos-deno', label: 'Mage' },
      { icon: 'i-simple-icons-primevue', label: 'Primevue' },
      { icon: 'i-simple-icons-shadcnui', label: 'Shadcn' },
      { icon: 'i-simple-icons-shadcnui', label: 'Shadcn-vue' },
      { icon: 'i-logos-react', label: 'renoun' },
      { icon: 'i-logos-vue', label: 'Nuxt Content' },
      { icon: 'i-devicon-astro', label: 'Astro Content' }
    ]" />
  </Card>

  <Card color="yellow" icon="i-carbon-http" title="HTTP Clients" v-click>
    <IconList class="text-sm" :items="[
      { icon: 'i-carbon-data-base', label: 'upfetch' },
      { icon: 'i-carbon-data-base', label: 'rest-client' },
      { icon: 'i-carbon-data-base', label: 'better-fetch' },
      { icon: 'i-carbon-data-base', label: 'make-service' },
      { icon: 'i-logos-axios', label: 'zod-axios' },
      { icon: 'i-carbon-data-base', label: 'zodios' }
    ]" />
  </Card>

  <Card color="red" icon="i-carbon-tools" title="Utilities" v-click>
    <IconList class="text-sm" :items="[
      { icon: 'i-devicon-typescript', label: 'T3 Env' },
      { icon: 'i-devicon-react', label: 'cachified' },
      { icon: 'i-ph:upload-duotone', label: 'UploadThing' },
      { icon: 'i-devicon-typescript', label: 'OpenAuth' },
      { icon: 'i-logos-faker', label: 'zod-schema-faker' },
      { icon: 'i-logos-prisma', label: 'Prisma zod generator' },
      { icon: 'i-logos-drizzle', label: 'Drizzle ORM' }
    ]" />
  </Card>

  <Card color="indigo" icon="i-ph-flow-arrow-duotone" title="Routing" v-click>
    <IconList class="text-sm" :items="[
      { icon: 'i-logos-react', label: 'TanStack Router' },
      { icon: 'i-devicon-typescript', label: 'call-api' },
      { icon: 'i-logos-vue', label: 'Kitbag' }
    ]" />
  </Card>
</div>

<!--
The tooling ecosystem around Zod and standard schemas is remarkable. From API frameworks to form libraries, UI components to testing utilities - there's robust support across the JavaScript ecosystem. This means you're not just adopting a validation library - you're plugging into a complete ecosystem of tools and best practices. Whether you're building APIs with tRPC, forms with React Hook Form, or generating mock data for tests, there's a tool that integrates seamlessly with your schema definitions.
-->

---
layout: center
themeColor: yellow
---

# [Key]{.text-yellow-200} Benefits

<div class="grid grid-cols-2 gap-4 mt-6">
  <Card
    v-click
    color="green"
    title="Fewer Production Bugs"
    subtitle="Runtime validation catches issues pre-deployment"
  >
    <template #icon>⬇️</template>
  </Card>

  <Card
    v-click
    color="blue"
    title="Faster Debugging"
    subtitle="Detailed error paths & validation messages"
  >
    <template #icon>⏱️</template>
  </Card>

  <Card
    v-click
    color="purple"
    title="DevEx Improvement"
    subtitle="Autocomplete & type safety across boundaries"
  >
    <template #icon>✨</template>
  </Card>

  <Card
    v-click
    color="yellow"
    title="Schema Parity"
    subtitle="Single source of truth across all layers"
  >
    <template #icon> <span class="text-yellow-400">🔄 1:1 </span></template>
  </Card>
</div>

<!--
Let's summarize the key benefits of using Zod. Catch issues before they hit production—runtime validation catches issues pre-deployment. Pinpoint exact validation failures—detailed error paths and messages. Autocomplete and type safety everywhere—developer experience improvement. One source of truth across your stack—schema parity. One team reduced production bugs by 60%—most importantly, developer confidence skyrocketed.
-->

---
themeColor: yellow
layout: center
---

# [Adoption]{.text-yellow-200} Strategy

<div class="flex flex-col gap-6 mt-6">
  <div class="grid grid-cols-2 gap-4">
    <Card
      v-click
      color="blue"
      icon="i-ph:steps-duotone"
      title="Incremental Approach"
      subtitle="Validate one endpoint at a time, starting with critical paths"
    />
     <Card
      v-click
      color="purple"
      icon="i-ph:puzzle-piece-duotone"
      title="Schema Composition"
      subtitle="Build a library of reusable schema components for consistency"
    />
    <Card
      v-click
      color="green"
      icon="i-ph:share-network-duotone"
      title="Reuse Schemas"
      subtitle="Create reusable schemas that serve as data models"
    />
    <Card
      v-click
      color="yellow"
      icon="i-ph:code-duotone"
      title="Generate Assets"
      subtitle="Auto-generate types, mocks, and API clients from schemas"
    />
  </div>
</div>

<!--
Let's talk about practical adoption strategies. Start small - pick one critical API endpoint and add validation there. You'll see immediate benefits without overwhelming your team. Share schemas across your codebase - they become your single source of truth for data structures. Reuse these schemas everywhere - forms, validation, even mock data generation. And leverage tools to auto-generate types and API clients from your schemas. This incremental approach makes adoption manageable and shows value quickly.
-->

---
themeColor: yellow
layout: two-cols
layoutClass: flex justify-center items-center h-full !gap-24
---

# [What we]{.text-yellow-200} learned

::right::

<NumberList
  class="gap-12"
  :cols="2"
  :features="[
    {
      title: 'Powerful & Flexible',
      description: 'Zod is a powerful and flexible validation library that can be used in a variety of scenarios.'
    },
    {
      title: 'Easy Integration',
      description: 'Easily introduced into existing codebase with minimal effort.'
    },
    {
      title: 'Incremental Value',
      description: 'Provides a lot of value, even if you don\'t use it for everything.'
    },
    {
      title: 'Trust Boundaries',
      description: 'Can be added at any trust boundary in your codebase.'
    }
  ]"
/>

<!--
Let's recap what we've covered today. We've seen how Zod provides powerful validation capabilities that can be applied across your entire stack. The beauty is in its flexibility - you can start small, maybe just validating API responses, and gradually expand. Each validation point you add brings immediate value, catching potential issues before they become problems. And by focusing on trust boundaries - those points where data enters your system - you get maximum impact for your effort.
-->


---
themeColor: yellow
growSeed: 20
growOpacity: 0.3
grow: full
class: flex justify-center items-center
disabled: true
---

<div class="relative w-full">
  <qr-code class="absolute top-0 right-0" text="https://github.com/josephanson/demo-devworld-2025" error-level="H" :scale="5" />

# [Live]{.color-yellow-200} Demo 🚀

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
      <div class="text-xs">Vercel AI with Chrome based Gemini</div>
    </div>
  </div>

  <!-- Validation points -->
  <div class="grid grid-cols-3 gap-4 mt-8">
    <Card
      v-click
      center
      color="blue"
      title="API Validation"
      subtitle="Request / Response safety with Zod"
    />
    <Card
      v-click
      center
      color="purple"
      title="Frontend Safety"
      subtitle="Form validation with Zod"
    />
    <Card
      v-click
      center
      color="green"
      title="Data Generation"
      subtitle="Generate Data using Zod and AI"
    />
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
layout: two-cols
class: flex items-center my-auto
growSeed: 14
themeColor: blue
---

# [Thank]{.color-blue-200} You!

<div class="mt-8">
  <div class="text-2xl font-bold mb-4">
    Let's Build Safer Systems Together
  </div>

  <div class="flex flex-col gap-4 mb-4">

<div>
  <h4 class="opacity-75">Slides, Demo Application & Resources</h4>
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
