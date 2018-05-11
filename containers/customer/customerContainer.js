import React, { Component } from 'react';
import { Container, Content, Header, List, ListItem, Thumbnail, Left, Right, Body, Button, Icon, Title, Text, ScrollableTab } from 'native-base';
import Store from '../../component/store';
import Transaction from '../../component/transaction';
import { StyleSheet } from 'react-native'
import ScrollableTabView, {
    ScrollableTabBar
} from 'react-native-scrollable-tab-view';

class CustomerContainer extends Component {
    static navigationOptions = {
        title: "Dummy",
        tabBarIcon: () => (
            <Icon style={styles.icon} name='star' />
        )
    }

    constructor(props) {
        super(props);
    }

    renderTabBar = () => {
        return (
            <ScrollableTabBar
                style={{
                    borderBottomWidth: 0.5,
                    borderBottomColor: '#535353'
                }}
            />
        );
    };

    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: '#05A5D1' }}>
                    <Body style={{ margin: 20 }}>
                        <Title>Customer</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <Container >
                        <ScrollableTabView
                            renderTabBar={() => <ScrollableTabBar />}
                            initialPage={5}
                        >
                            <Store navigation={this.props.navigation} tabLabel={'Store'} />
                            <Store navigation={this.props.navigation} tabLabel={'Store1'} />
                            <Store navigation={this.props.navigation} tabLabel={'Store2'} />
                            <Store navigation={this.props.navigation} tabLabel={'Store3'} />
                            <Store navigation={this.props.navigation} tabLabel={'Store4'} />
                            <Transaction navigation={this.props.navigation} tabLabel={'Transaction'} />
                        </ScrollableTabView>
                    </Container>
                </Content>
            </Container >
        )
    }
};

export default CustomerContainer;

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});