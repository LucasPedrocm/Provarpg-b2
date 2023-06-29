import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CardsPage from '../pages/CardsPage';

const Stack = createNativeStackNavigator();


export default function AppRoutes(){
    return (
        <Stack.Navigator>
            <Stack.Screen name='CardsPage' component={CardsPage} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}