export default function JsonLd({ data }: { data: object }) {
  const json = JSON.stringify(data)
    .replace(/</g, "\\u003c") // kills </script>, <!--, <script to make this feature proof for xss attacks if one day we wanted to make this part dynamic or have reflected user input
    .replace(/>/g, "\\u003e"); // optional, extra safety

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
