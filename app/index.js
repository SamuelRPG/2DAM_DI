import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Button, Provider as PaperProvider, Text } from "react-native-paper";

 const estilInicial = 'florida';
 const isAdmin = true;
 const moduls2Dam = [
{ nom: 'DIN', professor: 'Manel', hores: 120 },
{ nom: 'ADA', professor: 'Roberto', hores: 120 },
{ nom: 'PMDM', professor: 'Paco', hores: 100 },
{ nom: 'PSP', professor: 'Roberto', hores: 60 },
{ nom: 'SGE', professor: 'Belén', hores: 100 },
{ nom: 'Anglés', professor: 'Caterina', hores: 40 },
{ nom: 'EIE', professor: 'Ana', hores: 60 },
];

const MostrarModulos = () => {
  return (
    <View>
      {moduls2Dam.map((elem, i) => (
        <View key={i} style={i%2==0 ? styles.color1 : styles.color2}>
          <Text> {elem.nom + "\n" + elem.professor + "\n" + elem.hores}</Text>
        </View>
      ))}
    </View>
  )
}
const Nom = ({ nombre, apellido, estilo }) => {
  return (
    <Text style={estilo}> Bienvenido {nombre} {apellido} </Text>
  )
}

const PlaceholderColor = () => {
  return (
    estilInicial==='florida' ? "white" : "orange"
  )
}

const MostrarBoto = () => {
   return (
    <View>
    {isAdmin && <Button icon="format-list-bulleted" mode="contained"> INFORMES </Button>}
    </View>
    
   )
}

const Dades = ({ ar }) => {
  return (
    <View style={estilInicial==='florida' ? styles.florida : styles.upv}>
      {ar.map((elem, i) => (
        <View key={i}>
          <TextInput
            placeholder={elem}
            placeholderTextColor={PlaceholderColor()}
          />
        </View>
      ))}
    </View>
  );
}

const Inici = () => {
  const [array, setArray] = useState(["Email", "Nombre"]);
  return (
    <PaperProvider>
      <Nom nombre="Samuel" apellido="Niger" estilo={styles.texto} />
      <Dades ar={array} />
      <MostrarBoto/>
      <MostrarModulos/>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  texto: {
    marginTop: 40,
    fontSize: 30,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignContent: 'center',
  },
  upv: {
    backgroundColor: 'purple',
    fontSize: 10,
    fontWeight: '600',
    padding: 4,
    paddingLeft: 12,
    textAlign: 'left',
    color: 'grey',
  },
  florida: {
    backgroundColor: 'red',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  color1: {
    backgroundColor: '#F48FB1'
  }, 
  color2: {
    backgroundColor: '#F8BBD0'
  }
})

export default Inici;


