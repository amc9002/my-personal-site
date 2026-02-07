import { whenThisWayOfThinkingHelps } from "../../../content/howIThink/whenThisWayOfThinkingHelps";

function WhenThisWayOfThinkingHelps() {
  return (
    <section className="prose">
      <h2>{whenThisWayOfThinkingHelps.title}</h2>

      <p>{whenThisWayOfThinkingHelps.usefulWhen[0]}</p>

      <ul>
        {whenThisWayOfThinkingHelps.cases.map((caseItem, index) => (
          <li key={index}>{caseItem}</li>
        ))}
      </ul>

      <p>{whenThisWayOfThinkingHelps.noLongerRepair}</p>
    </section>
  );
}

export default WhenThisWayOfThinkingHelps;
