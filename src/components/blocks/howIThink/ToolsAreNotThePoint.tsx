import { toolsAreNotThePoint } from "../../../content/howIThink/toolsAreNotThePoint";

function ToolsAreNotThePoint() {
  return (
    <section className="prose">
      <h2>{toolsAreNotThePoint.title}</h2>

      <p>{toolsAreNotThePoint.notDefinedByTools}</p>

      <p>{toolsAreNotThePoint.meansNotEssence}</p>

      <p>{toolsAreNotThePoint.doesNotNeedToMemorize}</p>

      <p>{toolsAreNotThePoint.anEngineerMust}</p>

      <ul>
        {toolsAreNotThePoint.must.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <p>{toolsAreNotThePoint.whenToolsChange}</p>

      <p>{toolsAreNotThePoint.whyModernTools}</p>
    </section>
  );
}

export default ToolsAreNotThePoint;
