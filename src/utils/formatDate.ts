export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleString('en-US', {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  });
};
