
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchSpsRequest } from '../../store/salesPersons/actions';
import CSPOutput from '../../components/ClientsSalesPersonOutput/cspOutput';

function AllSalesPersons() {
    const dispatch = useDispatch();
    const salesPerson = useSelector((state) => state.salesPerson.sps)
    useEffect(() => {
        dispatch(fetchSpsRequest());
    }, [dispatch]);
  
    
    return <CSPOutput navigateTo="salesPersonDetails" data={salesPerson} />;
    
}
export default AllSalesPersons;