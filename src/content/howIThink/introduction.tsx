// Апісваем інтэрфейс адзін раз, каб забыцца на any
interface IntroProps {
  data: {
    title: string;
    text: string[];
  };
}

const Introduction = ({ data }: IntroProps) => {
  // Бяспечная праверка: калі дадзеных няма, вяртаем null, а не памылку
  if (!data || !data.text) return null;

  return (
    <section className="intro-section">
      <h1 className="intro-title">{data.title}</h1>
      {data.text.map((paragraph, index) => (
        <p key={index} className="intro-text">
          {paragraph}
        </p>
      ))}
    </section>
  );
};

export default Introduction;
