import {FlatList, View, Text} from "react-native";
import CSPSummary from "../ClientsSalesPersonOutput/cspSummary";

function MeetingsList({ }) {
    
    const data = [
        { id: "1", client: "Client 1", date: "2024-05-20", time: "10:00 AM", schedule: "Meeting" },
        { id: "2", client: "Client 2", date: "2024-05-21", time: "11:00 AM", schedule: "Call" },
        { id: "3", client: "Client 3", date: "2024-05-22", time: "12:00 PM", schedule: "Meeting" },
    ];
    
    const renderItems = ({ item }) => (
        <View style={{ flexDirection: "row", padding: 10 }}>
          <Text style={{ flex: 1 }}>{item.client}</Text>
          <Text style={{ flex: 1 }}>{item.date}</Text>
          <Text style={{ flex: 1 }}>{item.time}</Text>
          <Text style={{ flex: 1 }}>{item.schedule}</Text>
        </View>
    );
    
    const headers = {
        client: "Client",
        date: "Date",
        time: "Time",
        schedule: "Schedule",
    
      }

      
    return (
 <View>
   <CSPSummary headers={headers} />
    <FlatList
      data={data}
      renderItem={renderItems}
      keyExtractor={(item) => item._id}
    >
                
    </FlatList>

        </View>
  
  );
}

export default MeetingsList;
