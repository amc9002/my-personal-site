export const parseText = (text: string) => {
  // Шукаем тэгі <b>...</b> альбо <strong>...</strong>
  const parts = text.split(/(<b>.*?<\/b>|<strong>.*?<\/strong>)/gi);
  return parts.map((part, index) => {
    if (
      part.toLowerCase().startsWith("<b>") ||
      part.toLowerCase().startsWith("<strong")
    ) {
      // Прыбіраем тэгі і ахінаем у React-тэг
      const content = part.replace(/<\/?(b|strong)>/gi, "");
      return <strong key={index}>{content}</strong>;
    }
    return part;
  });
};