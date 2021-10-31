import { useEffect, useState } from 'react';
import {useLocation} from 'react-router-dom';
const ManagmentSearcher = () => {
  const {pathname} = useLocation();

  const [searcher, setSearcher] = useState('dog');

  useEffect(() => {
    const splitPath = pathname.split('/');
    if (splitPath[2]) setSearcher(splitPath[2]);
    else setSearcher('dog');

  }, [pathname]);

  return (
    <div>
      { searcher }
    </div>
  );
};

export default ManagmentSearcher;