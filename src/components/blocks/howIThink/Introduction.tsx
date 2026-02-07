import { introduction } from "../../../content/howIThink/introduction";

function Introduction() {
  return (
    <section className="prose">
      <h2>{introduction.title}</h2>

      {introduction.paragraphs.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </section>
  );
}

export default Introduction;
