import { Checkbox } from '..';

export const FilterClothes = () => {
  return (
    <div>
      <Checkbox name="t-shirt" groupName="clothes" />
      <Checkbox name="shorts" groupName="clothes" />
      <Checkbox name="shirts" groupName="clothes" />
      <Checkbox name="hoodies" groupName="clothes" />
      <Checkbox name="jeans" groupName="clothes" />
    </div>
  );
};
