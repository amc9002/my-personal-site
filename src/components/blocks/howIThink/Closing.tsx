import { closing } from "../../../content/howIThink/closing";

function Closing() {
  return (
    <section className="prose">
      <h2>{closing.title}</h2>

      <p>{closing.imInterested}</p>

      <p>{closing.ifItResonates}</p>

      <p>{closing.singleAnalysis}</p>
    </section>
  );
}

export default Closing;
