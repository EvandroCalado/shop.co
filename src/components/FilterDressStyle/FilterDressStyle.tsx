import { Checkbox, Heading } from '..';

export const FilterDressStyle = () => {
  return (
    <div>
      <Heading
        title="dress style"
        as="h6"
        className="font-semibold capitalize"
      />
      <Checkbox name="casual" groupName="dressStyle" />
      <Checkbox name="formal" groupName="dressStyle" />
      <Checkbox name="party" groupName="dressStyle" />
      <Checkbox name="gym" groupName="dressStyle" />
    </div>
  );
};
