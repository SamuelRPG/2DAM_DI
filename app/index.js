//rama main, proyecto base

import React, { useState } from "react";
import { Text, View } from "react-native";
import { Provider as PaperProvider, TextInput } from "react-native-paper";
//wazaaaa
const Saluda = ({ nom, cognoms }) => {
  const [contrasenya, setPassword] = useState("");
  const [contrasenyaOculta, setContrasenyaOculta] = useState(true);
//asas
  const modificaContrasenya = (unPassword) => {
    setPassword(unPassword);
    console.log("Actualitze: " + unPassword);
  };

  const modificaContrasenyaOculta = () => {
    setContrasenyaOculta(!contrasenyaOculta);
  };

  return (
    <View style={{ margin: 20 }}>
      <Text style={{ fontSize: 18, margin: 10 }}>
        Hola {nom} {cognoms}!!
      </Text>
      <Text>Primera pàgina de prova!!!.</Text>

      <View>
        <TextInput
          mode="outlined"
          label="Password"
          secureTextEntry={contrasenyaOculta}
          value={contrasenya}
          onChangeText={(contrasenya) =>modificaContrasenya(contrasenya)}
          right={
            <TextInput.Icon
              icon={contrasenyaOculta ? "eye" : "eye-off"}
              onPress={() => modificaContrasenyaOculta()}
            />
          }
        />
      </View>
    </View>
  );
};

const Index = () => {
  return (
    <PaperProvider>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Saluda nom="Samuel" cognoms="Rodriguez" />
      </View>
    </PaperProvider>
  );
};

export default Index;


