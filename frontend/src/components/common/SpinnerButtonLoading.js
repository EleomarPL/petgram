import { Loading } from '@nextui-org/react';

const SpinnerButtonLoading = () => {
  return (
    <Loading color="currentColor" type="default"
      css={ { px: '$2' } }
    />
  );
};

export default SpinnerButtonLoading;