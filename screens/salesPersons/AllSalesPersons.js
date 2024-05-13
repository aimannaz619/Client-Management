import { View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchSpsRequest } from '../../store/salesPersons/actions';

function AllSalesPersons() {
    const dispatch = useDispatch();
    const salesPerson = useSelector((state) => state.salesPerson)
    useEffect(() => {
        dispatch(fetchSpsRequest());
    }, [dispatch]);
  
    console.log(salesPerson.sps, "sps")
    return (
        <View>
            <Text>All Sales Persons</Text>
        </View>
    )
    
}
export default AllSalesPersons;