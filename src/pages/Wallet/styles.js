import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Wrapper = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  background: #000;
  flex: 1;
`;

export const Header = styled(LinearGradient)`
  height: 300px;
`;

export const HeaderContainer = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #FFF;
  font-size: 16px;
  font-weight: bold;
`;

export const BalanceContainer = styled.View`
  margin: 10px 0;
  flex-direction: row;
  align-items: center;
`;

export const Value = styled.Text`
  font-size: 38px;
  color: #FFF;
  font-weight: 200;
`;

export const Bold = styled.Text`
  font-weight: bold;
`;

export const EyeButton = styled.TouchableOpacity`
  margin-left: 10px;
`;

export const Info = styled.Text`
  color: #FFF;
  font-size: 14px;
`;

export const Actions = styled.View`
  flex-direction: row;
  margin-top: 40px;
`;

export const Action = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 150px;
  border: 1px solid rgba(255,255,255,0.6);
  border-radius: 25px;
  margin: 0 10px;
`;

export const ActionLabel = styled.Text`
  color: #FFF;
  font-size: 16px;
  margin-left: 10px;
`;


export const UseBalance = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #1c1c1e;
  height: 60px;
  padding: 0 16px;
`;

export const UseBalanceTitle = styled.Text`
  color: #FFF;
  font-size: 16px;
  font-weight: 600;
`;

export const PaymentMethods = styled.View`
  margin-top: 20px;
  padding: 16px;
 `;

export const PaymentMethodsTitle = styled.Text`
  color: #8e8e93;
  text-transform: uppercase;
`;

export const Card = styled.View`
  background: #1e232a;
  padding: 20px;
  border-radius: 8px;
  margin-top: 10px;
`;

export const CardBody = styled.View`
  flex-direction: row;
`;

export const CardDetails = styled.View`
  flex: 1;
  margin-right: 20px;
`;

export const CardTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #FFF;
`;

export const CardInfo = styled.Text`
  font-size: 14px;
  color: rgba(255,255,255,0.5);
  margin-top: 15px;
`;

export const Img = styled.Image`
  width: 60px;
`;

export const AddButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
`;

export const AddLabel = styled.Text`
  color: #0db060;
  margin-left: 15px;
  font-weight: bold;
  font-size: 16px;
`;

export const UseTicketButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`;

export const UseTicketLabel = styled.Text`
  color: #0db060;
  margin-left: 15px;
  font-weight: bold;
  font-size: 16px;
  text-decoration-line: underline;
`;