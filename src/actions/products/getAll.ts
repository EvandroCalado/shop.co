export const getAll = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products?populate=*`,
  );
  return res.json();
};
