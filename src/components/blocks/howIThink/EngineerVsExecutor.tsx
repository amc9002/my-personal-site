import { engineerVsExecutor } from "../../../content/howIThink/engineerVsExecutor";

function EngineerVsExecutor() {
  return (
    <section className="prose">
      <h2>{engineerVsExecutor.title}</h2>

      {engineerVsExecutor.paragraphs.map((text, index) => (
        <p key={index}>{text}</p>
      ))}

      <p>{engineerVsExecutor.executor.title}</p>
      <ul>
        {engineerVsExecutor.executor.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <p>{engineerVsExecutor.engineer.title}</p>
      <ul>
        {engineerVsExecutor.engineer.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <p>{engineerVsExecutor.closing}</p>
    </section>
  );
}

export default EngineerVsExecutor;
