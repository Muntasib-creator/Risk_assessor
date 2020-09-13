import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { colorPallate } from "../GlobalStyleVars";
import InventoryAssets from "./InventoryAssets";
import {
  Feather,
  Ionicons,
  FontAwesome5,
  SimpleLineIcons,
} from "@expo/vector-icons";

const Tab = createMaterialBottomTabNavigator();

const assets = {
  hardware: "Hardware",
  software: "Software",
  people: "People",
  premises: "Premises",
  org: "Organization",
};

function Hardware() {
  return <InventoryAssets inventory={assets.hardware} />;
}
function Software() {
  return <InventoryAssets inventory={assets.software} />;
}

function People() {
  return <InventoryAssets inventory={assets.people} />;
}

function Premises() {
  return <InventoryAssets inventory={assets.premises} />;
}
function Organization() {
  return <InventoryAssets inventory={assets.org} />;
}
function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Hardware"
      activeColor={colorPallate.theme}
      inactiveColor={colorPallate.primaryFocus}
      barStyle={{ backgroundColor: "white" }}
    >
      <Tab.Screen
        name="Hardware"
        component={Hardware}
        options={{
          tabBarLabel: "Hardware",
          tabBarIcon: ({ color }) => (
            <Feather name="hard-drive" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Software"
        component={Software}
        options={{
          tabBarLabel: "Software",
          tabBarIcon: ({ color }) => (
            <Feather name="monitor" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Org"
        component={Organization}
        options={{
          tabBarLabel: "Organization",
          tabBarIcon: ({ color }) => (
            <SimpleLineIcons name="organization" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="People"
        component={People}
        options={{
          tabBarLabel: "People",
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-people" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Premises"
        component={Premises}
        options={{
          tabBarLabel: "Premises",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="building" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function () {
  return (
    // <NavigationContainer>
    <MyTabs />
    // </NavigationContainer>
  );
}
