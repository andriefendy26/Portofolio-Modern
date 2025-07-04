export function TypographyH1({text}) {
  return (
    <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
     {text}
    </h1>
  )
}
export function TypographyH2({text}) {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
     {text}
    </h2>
  )
}
export function TypographyH3({text}) {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {text}
    </h3>
  )
}
export function TypographyH4({text}) {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {text}
    </h4>
  )
}
export function TypographyP({text}) {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      {text}
    </p>
  )
}
// export function TypographyBlockquote({text}) {
//   return (
//     <blockquote className="mt-6 border-l-2 pl-6 italic">
//       &quot;After all,&quot; he said, &quot;everyone enjoys a good joke, so
//       it&apos;s only fair that they should pay for the privilege.&quot;
//     </blockquote>
//   )
// }
