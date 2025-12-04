import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';
import Container from '../components/Container';
import { globalStyles } from '../styles/globalStyles';
import RowComponent from '../components/RowComponent';
import SectionComponent from '../components/SectionComponent';
import TextComponent from '../components/TextComponent';
import { fontFamilies } from '../constants/fontFamilies';
import { corlors } from '../constants/colors';
import CardComponent from '../components/CardComponent';
import TitleComponent from '../components/TitleComponent';

const HomeScreen = () => {
  return (
    <Container>
      <SectionComponent>
        <RowComponent justify="space-between">
          <TextComponent text="hhh" />
        </RowComponent>
      </SectionComponent>
      <SectionComponent>
        <Text style={[globalStyles.text]}>Hi Son</Text>
        <TextComponent
          text="Be Productive today"
          size={20}
          font={fontFamilies.semibold}
        />
      </SectionComponent>
      <SectionComponent>
        <RowComponent
          styles={[globalStyles.inputContainer]}
          onPress={() => console.log('Search pressed')}
        >
          <TextComponent text="Search" size={16} font={fontFamilies.medium} />
          <Text>S</Text>
        </RowComponent>
      </SectionComponent>

      <SectionComponent>
        <CardComponent>
          <RowComponent>
            <View style={{ flex: 1 }}>
              <TitleComponent text="Task progress" size={16} />
              <TextComponent
                text="30/40 Tasks completed"
                font={fontFamilies.semibold}
                color={corlors.text}
              />
              <TextComponent text="Tag" />
            </View>
            <View>
              <TextComponent
                text="5 Tasks"
                size={16}
                font={fontFamilies.medium}
                color={corlors.desc}
              />
            </View>
          </RowComponent>
        </CardComponent>
      </SectionComponent>
    </Container>
  );
};

export default HomeScreen;
