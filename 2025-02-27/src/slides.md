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
  sans: Barlow Semi Condensed@400,700,900
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

TypeScript has revolutionized how we write JavaScript, however there's a critical gap between compile-time and runtime. \

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
    subtitle="Compile-time type safety"
  />

  <Card
    v-click
    center
    color="blue"
    icon="i-logos-zod"
    iconCenter
    title="The Solution"
    subtitle="Runtime validation"
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
    icon="i-ph:rocket-launch-duotone"
    iconCenter
    title="Live Demo"
    subtitle="Runtime Validation in Action"
  />
</div>

<!--
In this session, [click] we'll explore the compile type safety issues we may face.

[click] I'll show how we can use schema validation can help solve these problems.

[click] I provide some real-world examples.

[click] And we'll finish with a live demo of type safety in action.
-->

---
layout: center
class: text-center flex flex-col justify-between max-w-5xl mx-auto items-center
themeColor: cyan
growSeed: 8
growOpacity: 0.5
grow: right
---

# [JS]{.color-cyan-200} Type Safety [Journey]{.color-cyan-200}

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
First let's look at how we got here. Our journey with type safety has three distinct phases.

[click] First, the JavaScript era—the 'trust me' era. I honestly don't know how we were able to code production apps like this.

[click] Then came TypeScript—a game changer. Suddenly, we had compile-time safety, and those red squiggly lines became our best friends.

[click] But we discovered a problem: all our beautiful types disappear at runtime. That's our focus today—bridging this gap.

Quick show of hands—who's been bitten by runtime type errors? Those hands? That's why we're here.
-->

---
layout: center
themeColor: cyan
---

# [Where Things]{.color-cyan-200} Go Wrong

<NumberList
  class="mt-12"
  cols="3"
  :features="[
  {
    title: 'Silent Type Failures',
    description: 'Insufficient or incorrect type definitions that fail without warning'
  },
  {
    title: 'Data Transformations',
    description: 'Transformations that break existing runtime assumptions'
  },
  {
    title: 'Type Casting',
    description: 'Overreliance on `as` casting, bypassing real type checks'
  }
]" />

<!--
Let's take a look at three common situations where things can go wrong in TypeScript applications.

[click] First, we have Silent Type Failures. These happen when type definitions appear correct but fail at runtime. Maybe we're missing edge cases in our type definitions, or we only have partial type coverage, which leads to uncaught errors.

[click] Next, there are Data Transformations. This is when API responses don't match the types we expect, or database results come back with unexpected null values. Even JSON parsing can sometimes produce invalid data structures that break our code.

[click] Finally, there's Type Casting. This is when we overuse the 'as' keyword or generics, which bypasses TypeScript's checks. We might force type assertions that mask real issues, or lose type safety through excessive casting.
-->

---
layout: two-cols-narrow
themeColor: cyan
layoutClass: items-center
---

# [Why This]{.color-cyan-200} Matters

::right::

<div class="grid gap-4">
 <Card
    v-click
    color="red"
    title="The Illusion of Safety"
    subtitle="Compile-time ≠ Runtime Safety"
  >
    <div class="opacity-75 text-sm">
      TypeScript's types vanish at runtime, leaving critical gaps in data validation
    </div>
  </Card>

  <Card
    v-click
    color="yellow"
    title="The Cost of Assumptions"
    subtitle="Silent Failures, Loud Consequences"
  >
    <div class="opacity-75 text-sm">
      Mismatched data leads to crashes, corrupted state, and costly debugging
    </div>
  </Card>

  <Card
    v-click
    color="green"
    title="The Power of Validation"
    subtitle="Building Trust at Every Boundary"
  >
    <div class="opacity-75 text-sm">
      Runtime validation creates resilient systems that fail fast and recover quickly
    </div>
  </Card>
</div>

<!--
TypeScript gives us a false sense of security. While it catches many errors at compile time, it can't protect us from runtime data issues. This gap between compile-time and runtime is where bugs thrive.

Just last month, a client's production system went down because an API started returning null for a required field. The TypeScript interface said it couldn't be null, but at runtime? Crash. Two hours of downtime, thousands in lost revenue.

These aren't hypotheticals - they're real problems with real costs. Runtime validation is our safety net, catching these issues before they become production fires.

Who's been burned by a runtime type error? Let's make sure it doesn't happen again.
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
[click] Firstly lets look at something I call the Trust Boundary. Inside, TypeScript protects us. Outside? We're making promises we can't keep. Every time you're doing one of these things you're losing trust that the application will run correctly.

[click] Let's look at some code. Here's our safe TypeScript code—beautiful type checking, the compiler has our back. Now, outside the boundary: see these 'as' keywords? Each one is a leap of faith. We're telling TypeScript: Trust me, back to the "trust me" phase.

[click] Any api call we make can lead to a runtime error.

[click] Local or Session Storage

[click] Path or Query Params

[click] ENV Vars

[click] File System

[click] Form Data

[click] Any other data that comes from outside the application and crosses the trust boundary can lead to runtime errors.
-->

---
themeColor: blue
layout: two-cols-narrow
layoutClass: items-center
---

# [The Runtime Validation]{.color-blue-200} Gap

::right::

````md magic-move
```ts
// Real-world example
interface LoanStatusResponse {
  id: string
  loanStatus: {
    amount: number
    currency: 'EUR'
    status: 'pending' | 'approved' | 'rejected'
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
    amount: number
    currency: 'EUR'
    status: 'pending' | 'approved' | 'rejected'
    interestRate: number
    total: number
  }
}

// What you get
const response: LoanStatusResponse = {
  id: '12345',
  loanStatus: null, // 😱 Should be an object!
}
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
---

# [Real-World]{.color-cyan-200} Impact

<FeatureList
  class="mt-12"
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
// Example: API Response Validation
interface User {
  email: string
  createdAt: Date
  role: 'ADMIN' | 'USER'
  preferences: { theme: 'light' | 'dark' }
}

const response = await fetch<User>('/api/user')
```

```ts
// Example: API Response Validation
interface User {
  email: string
  createdAt: Date
  role: 'ADMIN' | 'USER'
  preferences: { theme: 'light' | 'dark' }
}

const response = await fetch<User>('/api/user')
// What we receive from API
/*
const apiResponse: User = {
  email: 'not-valid', // ❌ Invalid format
  createdAt: '2024-13-45', // ❌ Invalid date
  role: 'admin', // ❌ Wrong case
  preferences: { theme: 'blue' } // ❌ Invalid theme
}
*/
```

```ts
// Example: API Response Validation
interface User {
  email: string
  createdAt: Date
  role: 'ADMIN' | 'USER'
  preferences: { theme: 'light' | 'dark' }
}

const response = await fetch<User>('/api/user')
// What we receive from API
/*
const apiResponse: User = {
  email: 'not-valid', // ❌ Invalid format
  createdAt: '2024-13-45', // ❌ Invalid date
  role: 'admin', // ❌ Wrong case
  preferences: { theme: 'blue' } // ❌ Invalid theme
}
*/

// Runtime errors
apiResponse.email.includes('@') // 💥 Invalid email
new Date(apiResponse.createdAt) // 💥 Invalid date
apiResponse.role === 'ADMIN' // 💥 Case mismatch
```
````
</v-click>

<!--
So what's the real world impact of this?

...

[click:5] Let's look at a real example of how TypeScript's compile-time checks can fail us at runtime. Here we have a typical API response validation scenario.

 In the first example, we define a User interface with specific types - an email string, a Date object, a union type for role, and a preferences object with a theme setting. Looks good at compile time, right?

But when we actually get data from the API, things go wrong. The email isn't validated, we get an invalid date string, the role casing doesn't match, and we get an unexpected theme value. TypeScript doesn't catch any of these at compile time because the types are erased at runtime.

[click] In the second example, we see what happens when we try to use this data. We get runtime errors when we try to use the email, parse the date, or check the role. These are the kind of errors that can crash our application in production, even though our TypeScript code looked perfectly valid.

This is a perfect illustration of why we need runtime validation - TypeScript's compile-time checks just aren't enough to protect us from bad data at runtime.
-->

---
layout: center
themeColor: blue
---

# [Consequences of]{.color-blue-200} <br> Runtime Mismatches

<NumberList
class="mt-12"
:cols="4"
:features="[
  {
    title: 'Application Crashes',
    description: 'Unhandled exceptions leading to system failures'
  },
  {
    title: 'Data Corruption',
    description: 'Downstream bugs from corrupted application state'
  },
  {
    title: 'Security Risks',
    description: 'Vulnerabilities when input sanitization fails'
  },
  {
    title: 'User Trust',
    description: 'Loss of confidence from unreliable behavior'
  }
]" />

---
layout: statement
themeColor: blue
---

<h1> <span class="color-blue-200">From Blind Faith to</span> <br> <span v-mark.blue.highlight.delay600="1" color-white> Bulletproof Validation </span> </h1>

<h2> Building Trust Through <span v-mark.blue.underline.delay2000="1" color-white>Runtime Validation </span> </h2>

<!--
Today, I want to take you on a journey - from the days of blind faith in our code to building truly bulletproof applications. We'll explore how runtime validation can transform the way we write TypeScript code and protect our applications from those sneaky type errors that slip through at runtime.

I've been working with TypeScript for years, and I've seen firsthand how devastating runtime type errors can be. But I've also discovered powerful solutions that can help us build more reliable applications. That's what I'm excited to share with you today.

By the end of this talk, you'll have practical strategies to protect your TypeScript applications from runtime type errors, making your code more robust and your development process more confident.
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
Let's understand what runtime validation really means. It's like having a security guard checking IDs at every entrance of your application. When data enters your system - whether from an API, user input, or database - it gets verified against your defined rules. This catches issues immediately, before they can cause problems deeper in your application. Think of it as your first line of defense against bad data.
-->

---
layout: iframe-right
url: https://standardschema.dev/
themeColor: indigo
scale: 0.7
---

# [What's]{.color-indigo-200} <br> Out There?

<div class="space-y-4">
  <div class="text-lg font-bold mb-4">Runtime Validation Libraries</div>
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
    subtitle="Designed for seamless adoption across frameworks and tools"
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
    description: 'Seamless TypeScript integration'
  },
  {
    icon: 'i-ph:code-duotone',
    color: 'text-blue-400',
    title: 'Developer Experience',
    description: 'Intuitive API and excellent documentation'
  },
  {
    icon: 'i-ph:lightning-duotone',
    color: 'text-purple-400',
    title: 'Performance',
    description: 'Optimized for runtime validation'
  },
  {
    icon: 'i-ph:users-duotone',
    color: 'text-orange-400',
    title: 'Ecosystem',
    description: 'Rich set of utilities and community support'
  }
]" />

<!--
While there are several validation libraries available, Zod has emerged as a leader for good reasons. Its popularity isn't just about being first - it's about being comprehensive and well-designed. The seamless TypeScript integration means you get excellent IDE support and type inference. The API is intuitive enough that new team members can get started quickly. And perhaps most importantly, it's fast - validation overhead is minimal, making it suitable for production use.
-->

---
themeColor: indigo
layout: center
---

<div class="grid grid-cols-2 gap-12">
<div>

# [Zod]{.text-indigo-200} <br> Essentials

<br>

<v-clicks>

- **`z.string()`** for strings
- **`z.number()`** for numbers
- **`z.boolean()`** for booleans
- **`z.date()`** for dates
- **`z.array()`** for arrays
- **`z.enum(['car', 'bus'])`** for enums
- **`z.object({ name: z.string() })`** for objects
- **`.parse()`** or **`.safeParse()`** to validate data
- **`z.infer<typeof schema>`** to get the inferred type

</v-clicks>

</div>

<div class="grid gap-4">

<Card
  v-click
  color="blue"
  title="Schema Definition"
  subtitle="Craft a schema to represent any data structure"
/>

<Card
  v-click
  color="green"
  title="Validation vs. Parsing"
  subtitle="Decide whether to throw or to handle errors"
/>

<Card
  v-click
  color="blue"
  title="Type Inference"
  subtitle="TypeScript infers the type of the validated data"
/>

<Card
  v-click
  color="yellow"
  title="Error Handling"
  subtitle="Handle errors gracefully"
/>

</div>
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
layout: two-cols-header
---

# [Validation]{.color-indigo-200} Fundamentals

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

<div v-click="5" class="mb-0" >

````md magic-move
```ts
// Runtime Validation - No thrown error
function validateProduct(data: Product) {
}
```

```ts
// Runtime Validation - No thrown error
function validateProduct(data: Product) {
  const result = ProductSchema.safeParse(data)
}
```

```ts
// Runtime Validation - No thrown error
function validateProduct(data: Product) {
  const result = ProductSchema.safeParse(data)
  if (!result.success) {
    logger.error(result.error.format())
    throw new Error('Invalid product data')
  }
}
```

```ts
// Runtime Validation - No thrown error
function validateProduct(data: Product) {
  const result = ProductSchema.safeParse(data)
  if (!result.success) {
    logger.error(result.error.format())
    throw new Error('Invalid product data')
  } else {
    return result.data
  }
}
```

```ts
// Runtime Validation - No thrown error
function validateProduct(data: Product) {
  const result = ProductSchema.safeParse(data)
  if (!result.success) {
    logger.error(result.error.format())
    throw new Error('Invalid product data')
  } else {
    return result.data
  }
}

// Runtime Validation - Throws error
function validateProduct(data: Product) {
    return ProductSchema.parse(data)  // => Type Product
}
```

```ts
// Runtime Validation - No thrown error
function validateProduct(data: Product) {
  const result = ProductSchema.safeParse(data)
  if (!result.success) {
    logger.error(result.error.format())
    throw new Error('Invalid product data')
  } else {
    return result.data
  }
}

// Runtime Validation - Throws error
function validateProduct(data: Product) {
  try {
    return ProductSchema.parse(data)  // => Type Product
  }
  catch (error) {
    if (error instanceof ZodError) {
      logger.error(error.format())
    }
  }
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

# [Type]{.color-indigo-200} Inference

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
themeColor: indigo
---

# [Schema Validation]{.text-indigo-200} in Practice

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
layout: two-cols-narrow
themeColor: indigo
---

# [Beyond]{.color-indigo-200} Basics

<v-clicks>

- **Mock Generation** with libraries like `zod-schema-faker`
- **Form Builders** hooking into real-time validation
- **Validate API Responses** with `h3`

</v-clicks>

::right::

<v-click at="1">

````md magic-move {at:2}
```ts
// Example: Generate mock data
import { faker } from '@faker-js/faker'
import { z } from 'zod'
import { fake } from 'zod-schema-faker'

const userSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  email: z.string().email()
})

// Generate a mock user
const mockUser = fake(userSchema)
```

```vue
<!-- Example: Form Validation with Veevalidate -->
<script setup>
import { z } from 'zod'
import { toTypedSchema } from '@vee-validate/zod'

const userSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  email: z.string().email()
})

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
// Example: Validate API Responses with Nitro
import { z } from 'zod'
import { defineEventHandler, readValidatedBody } from "h3";

const userSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  email: z.string().email()
})

return default defineEventHandler(async (event) => {
  const query = await readValidatedBody(event, userSchema.parse);

  return `Hello ${query.name}! You are ${query.age} years old.`;
})
```
````

</v-click>

<!--
Let's explore how Zod integrates with various tools and frameworks in the ecosystem:

1. API Validation:
   - Seamlessly validates incoming requests in any Node.js framework
   - Provides type-safe request/response handling
   - Catches invalid data at the API boundary

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
    color="blue"
    title="API Validation"
    subtitle="Seamless integration with frameworks like Express, Fastify, Nitro to validate incoming requests."
  />

  <Card
    v-click
    color="purple"
    title="Frontend Safety"
    subtitle="Type-safe forms with React Hook Form, FormKit, Veevalidate, Shadcn, etc."
  />

  <Card
    v-click
    color="green"
    title="Single Source of Truth"
    subtitle="Zod schemas can be used in the frontend, backend, and generated from your database schema."
  />

  <Card
    v-click
    color="yellow"
    title="Type-safe API Clients"
    subtitle="Auto-generate type-safe clients for your API with Zod."
  />

  <Card
    v-click
    color="red"
    title="Generate Mocks from Schemas"
    subtitle="Generate realistic mock data for testing and development."
  />

  <Card
    v-click
    color="indigo"
    title="AI Data Generation"
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
    ]" />
  </Card>

  <Card color="purple" icon="i-carbon-document" title="Form Libraries" v-click>
    <IconList class="text-sm" :items="[
      { icon: 'i-logos-react', label: 'TanStack Form' },
      { icon: 'i-logos-vue', label: 'Formwerk' },
      { icon: 'i-logos-vue', label: 'Veevalidate' },
      { icon: 'i-logos-vue', label: 'Regle' },
      { icon: 'i-devicon-svelte', label: 'Superforms' },
      { icon: 'i-logos-react', label: 'React Hook Form' }
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
      { icon: 'i-carbon-data-base', label: 'make-service' }
    ]" />
  </Card>

  <Card color="red" icon="i-carbon-tools" title="Utilities" v-click>
    <IconList class="text-sm" :items="[
      { icon: 'i-devicon-typescript', label: 'T3 Env' },
      { icon: 'i-devicon-react', label: 'cachified' },
      { icon: 'i-ph:upload-duotone', label: 'UploadThing' },
      { icon: 'i-devicon-typescript', label: 'OpenAuth' },
      { icon: 'i-logos-faker', label: 'zod-schema-faker' }
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
themeColor: yellow
growSeed: 20
growOpacity: 0.3
grow: full
class: flex justify-center items-center
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
themeColor: yellow
layout: center
---

# [What we]{.text-yellow-200} learned

<NumberList
  class="mt-8 gap-x-4 gap-y-0"
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
layout: center
themeColor: yellow
---

# [Key]{.text-yellow-200} Benefits 📈

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

# [Tips for]{.text-yellow-200} Adoption

<div class="grid grid-cols-2 gap-4">
  <Card
    color="blue"
    icon="i-ph:steps-duotone"
    title="Incremental Approach"
    subtitle="Validate one endpoint at a time, starting with critical paths"
  />

  <Card
    color="purple"
    icon="i-ph:share-network-duotone"
    title="Share Schemas"
    subtitle="Create reusable schemas that serve as data models"
  />

  <Card
    color="green"
    icon="i-ph:recycle-duotone"
    title="Reuse Patterns"
    subtitle="Use schemas for validation, forms, and data generation"
  />

  <Card
    color="yellow"
    icon="i-ph:code-duotone"
    title="Generate Assets"
    subtitle="Auto-generate types, mocks, and API clients from schemas"
  />
</div>

<!--
Let's talk about practical adoption strategies. Start small - pick one critical API endpoint and add validation there. You'll see immediate benefits without overwhelming your team. Share schemas across your codebase - they become your single source of truth for data structures. Reuse these schemas everywhere - forms, validation, even mock data generation. And leverage tools to auto-generate types and API clients from your schemas. This incremental approach makes adoption manageable and shows value quickly.
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
