import { whyProblemsComeBack } from "../../../content/howIThink/whyProblemsComeBack";

function WhyProblemsComeBack() {
  return (
    <section className="prose">
      <h2>{whyProblemsComeBack.title}</h2>

      <p>{whyProblemsComeBack.intro}</p>

      <p>{whyProblemsComeBack.reasonsIntro}</p>

      <ul>
        {whyProblemsComeBack.reasons.map((reason, index) => (
          <li key={index}>{reason}</li>
        ))}
      </ul>

      <p>{whyProblemsComeBack.explanation}</p>

      <p>{whyProblemsComeBack.signal}</p>

      <p>{whyProblemsComeBack.closing}</p>
    </section>
  );
}

export default WhyProblemsComeBack;
