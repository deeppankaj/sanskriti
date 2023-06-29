import React from "react";
import { Document, Page, View,Text ,StyleSheet, Font ,Image } from "@react-pdf/renderer";

const DownloadMap = ({user,img,mapn ,data}) => {
  const imageURL = img.toString()
    Font.register({
        family: 'Oswald',
        src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
      });
      
      const styles = StyleSheet.create({
        body: {
          paddingTop: 35,
          paddingBottom: 65,
          paddingHorizontal: 35,
        },
        title: {
          fontSize: 24,
          textAlign: 'center',
          fontFamily: 'Oswald'
        },
        author: {
          fontSize: 12,
          textAlign: 'center',
          marginBottom: 40,
        },
        subtitle: {
          fontSize: 18,
          margin: 12,
          fontFamily: 'Oswald'
        },
        text: {
          margin: 12,
          fontSize: 14,
          textAlign: 'justify',
          fontFamily: 'Times-Roman'
        },
        image: {
          marginVertical: 15,
          marginHorizontal: 10,
        },
        header: {
          fontSize: 12,
          marginBottom: 20,
          textAlign: 'center',
          color: 'grey',
        },
        pageNumber: {
          position: 'absolute',
          fontSize: 12,
          bottom: 30,
          left: 0,
          right: 0,
          textAlign: 'center',
          color: 'grey',
        },
        name:{
          fontSize:14,
          position: 'absolute',
          bottom: 40,
          left: 20,
          right: 0,
          // textAlign: 'center',
          color: 'grey',
        },
        info:{
          fontSize:16,
          marginVertical:2,
          marginHorizontal:20,
        }
      });
  return (
    <Document>
      <Page style={styles.body}>
        <View>
          <Text style={styles.title}>SnasKriti Maps - EaziMaps</Text>
        <Text style={styles.author}>City Master Plan</Text>
        <Image
          style={styles.image}
          src={imageURL}
        />
        {/* <Text style={styles.title}>
          {mapn}
        </Text> */}
        <Text style={styles.info}>
          Map Name : {data.mapname}
        </Text>
        <Text style={styles.info}>
          Binding : {data.binding}
        </Text>
        <Text style={styles.info}>
          Price : {data.price}
        </Text>
        </View>
        
        <Text style={styles.name}>
          Created By :- {user?.userName}
        </Text>
        <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
          `${pageNumber} / ${totalPages}`
        )} fixed />
      </Page>
    </Document>
  );
};

export default DownloadMap;

