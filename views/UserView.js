import React from 'react';
import {Container, Tab, Tabs, DefaultTabBar, TabHeading, Icon} from 'native-base'
import Perfil from './../components/Perfil'
import ListaServicios from './../components/ListaServicios'
import ListaNotificacion from './../components/ListaNotificacion'

const renderTabBar = (props) => {
    props.tabStyle = Object.create(props.tabStyle);
    return <DefaultTabBar {...props} />;
};

const UserView = () =>(
    <Container>
        <Tabs renderTabBar={renderTabBar} tabBarPosition="bottom" tabBarUnderlineStyle>
            <Tab heading="Tab1">
                <ListaServicios />
            </Tab>
            <Tab heading="Tab2">
                <ListaNotificacion />
            </Tab>
            <Tab heading={ <TabHeading><Icon name="apps" /></TabHeading>}>
                <Perfil />
            </Tab>
        </Tabs>
    </Container>
)

export default UserView;