import { systemsLiveBetweenDisciplines } from "../../../content/howIThink/systemsLiveBetweenDisciplines";

function SystemsLiveBetweenDisciplines() {
  return (
    <section className="prose">
      <h2>{systemsLiveBetweenDisciplines.title}</h2>

      <p>{systemsLiveBetweenDisciplines.theMostExpensiveProblems}</p>

      <p>{systemsLiveBetweenDisciplines.teamsSeeNothingWrong}</p>

      <p>{systemsLiveBetweenDisciplines.theSystemDoesNotWork}</p>

      <p>{systemsLiveBetweenDisciplines.betweenDomains}</p>

      <p>{systemsLiveBetweenDisciplines.whyTheyCannotBeSolved}</p>
    </section>
  );
}

export default SystemsLiveBetweenDisciplines;
