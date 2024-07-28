export default function Page({ params }: { params: { country: string } }) {
  return (
    <h1>
      Select Country:
      <b> {params.country}</b>
    </h1>
  );
}
