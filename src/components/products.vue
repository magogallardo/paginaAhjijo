<template>
  <v-sheet id="productosVista"

    class="mx-auto"
    elevation="8"
    max-width="100%"
    
  >
    <v-divider></v-divider>
    <h1 id="encabezadoProductos">Productos:</h1>
    <v-divider></v-divider>

    <v-slide-group 
      v-model="model"
      class="pa-4"
      show-arrows
    >
      <v-slide-item
        v-for="product in products"
        :key="product"
        v-slot="{ active, toggle }"
      >
        <v-card
          :color="active ? 'primary' : 'grey lighten-1'"
          class="ma-4"
          height="200"
          width="150"
          @click="toggle"
        >
          <v-img
            v-bind:src="require('../assets/productos/' + product.src)"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200"
            width="300"
          >
            <v-card-title v-text="product.name"></v-card-title>
            
          </v-img>
            
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-scale-transition>
              <v-icon
                v-if="active"
                color="white"
                size="48"
                v-text="'mdi-close-circle-outline'"
              ></v-icon>
            </v-scale-transition>
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>

    <v-expand-transition>
      <v-sheet
        v-if="model != null"
        height="200"
        tile
        id="descripcionProducto"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <h3 class="title">
            Selected {{ model }}
          </h3>
        </v-row>
      </v-sheet>
    </v-expand-transition>
  </v-sheet>
</template>

<style>
#encabezadoProductos{
  text-align: center;
}
#productosVista{
  background-image: url("../assets/fondoProductos.jpeg");
  background-repeat: repeat;
}
#descripcionProducto{
  background-color: #aeb9a6;
}
</style>



<script>
  export default {
    name: "products",
    data: () => ({
      model: null,
    
      products: [
        {name: 'Linaza. ', src: 'Inventario_Linaza.jpeg', descr: '', price: '0'},
        {name: 'Canela Rajas. ', src: 'Inventario_CanelaRajas.jpeg', descr: '', price: '0'},
        {name: 'Alegria Chocolate. ', src: 'Inventario_AlegriaChocolate.jpeg', descr: '', price: '0'},
        {name: 'Chile Guajillo Ancho. ', src: 'Inventario_ChileGuajilloAncho.jpeg', descr: '', price: '0'},
        {name: 'Malanga Dashitos Canela. ', src: 'Inventario_MalangaDashitosCanela.jpeg', descr: '', price: '0'},
        {name: 'Levadura Tradipan02. ', src: 'Inventario_LevaduraTradipan02.jpeg', descr: '', price: '0'},
        {name: 'Pepita Salada. ', src: 'Inventario_PepitaSalada.jpeg', descr: '', price: '0'},
        {name: 'Pasitas. ', src: 'Inventario_Pasitas.jpeg', descr: '', price: '0'},
        {name: 'Palanque Cacahuate. ', src: 'Inventario_PalanqueCacahuate.jpeg', descr: '', price: '0'},
        {name: 'Frutos Secos Pedacitos. ', src: 'Inventario_FrutosSecosPedacitos.jpeg', descr: '', price: '0'},
        {name: 'Chile Pasilla. ', src: 'Inventario_ChilePasilla.jpeg', descr: '', price: '0'},
        {name: 'Cacahuates Enchilados. ', src: 'Inventario_CacahuatesEnchilados.jpeg', descr: '', price: '0'},
        {name: 'Salsa Picosota150gr. ', src: 'Inventario_SalsaPicosota150gr.jpeg', descr: '', price: '0'},
        {name: 'Coco Blanco. ', src: 'Inventario_CocoBlanco.jpeg', descr: '', price: '0'},
        {name: 'Canelaen Polvo. ', src: 'Inventario_CanelaenPolvo.jpeg', descr: '', price: '0'},
        {name: 'Rollal. ', src: 'Inventario_Rollal.jpeg', descr: '', price: '0'},
        {name: 'Bolita Tamarindo Enchilado. ', src: 'Inventario_BolitaTamarindoEnchilado.jpeg', descr: '', price: '0'},
        {name: 'Carbonato. ', src: 'Inventario_Carbonato.jpeg', descr: '', price: '0'},
        {name: 'Malanga Dashitos Natural. ', src: 'Inventario_MalangaDashitosNatural.jpeg', descr: '', price: '0'},
        {name: 'Almendra Entera. ', src: 'Inventario_AlmendraEntera.jpeg', descr: '', price: '0'},
        {name: 'Frutos Secos. ', src: 'Inventario_FrutosSecos.jpeg', descr: '', price: '0'},
        {name: 'Crema Cera Carmen Mediana. ', src: 'Inventario_CremaCeraCarmenMediana.jpeg', descr: '', price: '0'},
        {name: 'Salvado. ', src: 'Inventario_Salvado.jpeg', descr: '', price: '0'},
        {name: 'Malanga Dashitos Abanero Limon. ', src: 'Inventario_MalangaDashitosAbaneroLimon.jpeg', descr: '', price: '0'},
        {name: 'Café Artesanal Veracruz02. ', src: 'Inventario_CaféArtesanalVeracruz02.jpeg', descr: '', price: '0'},
        {name: 'Malanga Dashitos Queso. ', src: 'Inventario_MalangaDashitosQueso.jpeg', descr: '', price: '0'},
        {name: 'Cacahuates Horneados. ', src: 'Inventario_CacahuatesHorneados.jpeg', descr: '', price: '0'},
        {name: 'Laurel. ', src: 'Inventario_Laurel.jpeg', descr: '', price: '0'},
        {name: 'Aba Enchilada. ', src: 'Inventario_AbaEnchilada.jpeg', descr: '', price: '0'},
        {name: 'Ajonjoli. ', src: 'Inventario_Ajonjoli.jpeg', descr: '', price: '0'},
        {name: 'Comino. ', src: 'Inventario_Comino.jpeg', descr: '', price: '0'},
        {name: 'Botana Mixta. ', src: 'Inventario_BotanaMixta.jpeg', descr: '', price: '0'},
        {name: 'Café Artesanal Chiapas02. ', src: 'Inventario_CaféArtesanalChiapas02.jpeg', descr: '', price: '0'},
        {name: 'Cacahuates Japonese. ', src: 'Inventario_CacahuatesJaponese.jpeg', descr: '', price: '0'},
        {name: 'Pasta Mino. ', src: 'Inventario_PastaMino.jpeg', descr: '', price: '0'},
        {name: 'Levadura Tradipan01. ', src: 'Inventario_LevaduraTradipan01.jpeg', descr: '', price: '0'},
        {name: 'Cocoa. ', src: 'Inventario_Cocoa.jpeg', descr: '', price: '0'},
        {name: 'Dulcede Leche. ', src: 'Inventario_DulcedeLeche.jpeg', descr: '', price: '0'},
        {name: 'Jengibre. ', src: 'Inventario_Jengibre.jpeg', descr: '', price: '0'},
        {name: 'Nuez Trozos. ', src: 'Inventario_NuezTrozos.jpeg', descr: '', price: '0'},
        {name: 'Cacahuates Garapiñados. ', src: 'Inventario_CacahuatesGarapiñados.jpeg', descr: '', price: '0'},
        {name: 'Cacahuates Holandeses. ', src: 'Inventario_CacahuatesHolandeses.jpeg', descr: '', price: '0'},
        {name: 'Pistache. ', src: 'Inventario_Pistache.jpeg', descr: '', price: '0'},
        {name: 'Malanga Dashitos Flaming Hot. ', src: 'Inventario_MalangaDashitosFlamingHot.jpeg', descr: '', price: '0'},
        {name: 'Pinole. ', src: 'Inventario_Pinole.jpeg', descr: '', price: '0'},
        {name: 'Salsa Picosita250gr. ', src: 'Inventario_SalsaPicosita250gr.jpeg', descr: '', price: '0'},
        {name: 'Quinoa. ', src: 'Inventario_Quinoa.jpeg', descr: '', price: '0'},
        {name: 'Café Artsanal Veracruz01. ', src: 'Inventario_CaféArtsanalVeracruz01.jpeg', descr: '', price: '0'},
        {name: 'Salsa Picosita 150gr. ', src: 'Inventario_SalsaPicosita150gr.jpeg', descr: '', price: '0'},
        {name: 'Pepita Pelada. ', src: 'Inventario_PepitaPelada.jpeg', descr: '', price: '0'},
        {name: 'Chipotlesen Conserva. ', src: 'Inventario_ChipotlesenConserva.jpeg', descr: '', price: '0'},
        {name: 'Paprika. ', src: 'Inventario_Paprika.jpeg', descr: '', price: '0'},
        {name: 'Almendra Fileteada. ', src: 'Inventario_AlmendraFileteada.jpeg', descr: '', price: '0'},
        {name: 'Avena Piloncillo. ', src: 'Inventario_AvenaPiloncillo.jpeg', descr: '', price: '0'},
        {name: 'Arandano Tajin. ', src: 'Inventario_ArandanoTajin.jpeg', descr: '', price: '0'},
        {name: 'Semilla Mostaza. ', src: 'Inventario_SemillaMostaza.jpeg', descr: '', price: '0'},
        {name: 'Amaranto. ', src: 'Inventario_Amaranto.jpeg', descr: '', price: '0'},
        {name: 'Jamaica. ', src: 'Inventario_Jamaica.jpeg', descr: '', price: '0'},
        {name: 'Coco Horneado. ', src: 'Inventario_CocoHorneado.jpeg', descr: '', price: '0'},
        {name: 'Mango Enchilado. ', src: 'Inventario_MangoEnchilado.jpeg', descr: '', price: '0'},
        {name: 'Garbanzo Enchilado. ', src: 'Inventario_GarbanzoEnchilado.jpeg', descr: '', price: '0'},
        {name: 'Oregano. ', src: 'Inventario_Oregano.jpeg', descr: '', price: '0'},
        {name: 'Semillas Girasol. ', src: 'Inventario_SemillasGirasol.jpeg', descr: '', price: '0'},
        {name: 'Acitron Rojo. ', src: 'Inventario_AcitronRojo.jpeg', descr: '', price: '0'},
        {name: 'Gomita Enchilada. ', src: 'Inventario_GomitaEnchilada.jpeg', descr: '', price: '0'},
        {name: 'Maíz Palomero. ', src: 'Inventario_MaízPalomero.jpeg', descr: '', price: '0'},
        {name: 'Nuezcon Cascara. ', src: 'Inventario_NuezconCascara.jpeg', descr: '', price: '0'},
        {name: 'Pepita Cascara. ', src: 'Inventario_PepitaCascara.jpeg', descr: '', price: '0'},
        {name: 'Curcuma Polvo. ', src: 'Inventario_CurcumaPolvo.jpeg', descr: '', price: '0'},
        {name: 'Alfajor. ', src: 'Inventario_Alfajor.jpeg', descr: '', price: '0'},
        {name: 'Barquillo Chocolate. ', src: 'Inventario_BarquilloChocolate.jpeg', descr: '', price: '0'},
        {name: 'Nuez Mitades. ', src: 'Inventario_NuezMitades.jpeg', descr: '', price: '0'},
        {name: 'Grenetina. ', src: 'Inventario_Grenetina.jpeg', descr: '', price: '0'},
        {name: 'Chia. ', src: 'Inventario_Chia.jpeg', descr: '', price: '0'},
        {name: 'Jamincillo. ', src: 'Inventario_Jamincillo.jpeg', descr: '', price: '0'},
        {name: 'Salsa Picosota250hr. ', src: 'Inventario_SalsaPicosota250hr.jpeg', descr: '', price: '0'},
        {name: 'Cocada Oblea. ', src: 'Inventario_CocadaOblea.jpeg', descr: '', price: '0'},
        {name: 'Mielde Abeja02. ', src: 'Inventario_MieldeAbeja02.jpeg', descr: '', price: '0'},
        {name: 'Alegria Grande. ', src: 'Inventario_AlegriaGrande.jpeg', descr: '', price: '0'},
        {name: 'Crema Cera Carmen Grande. ', src: 'Inventario_CremaCeraCarmenGrande.jpeg', descr: '', price: '0'},
        {name: 'Supercrunch. ', src: 'Inventario_Supercrunch.jpeg', descr: '', price: '0'},
        {name: 'Nuezdela India. ', src: 'Inventario_NuezdelaIndia.jpeg', descr: '', price: '0'},
        {name: 'Mielde Abeja01. ', src: 'Inventario_MieldeAbeja01.jpeg', descr: '', price: '0'},
        {name: 'Nuez Garapiñada. ', src: 'Inventario_NuezGarapiñada.jpeg', descr: '', price: '0'},
        {name: 'Ciruela Pasa. ', src: 'Inventario_CiruelaPasa.jpeg', descr: '', price: '0'},
        {name: 'Avena. ', src: 'Inventario_Avena.jpeg', descr: '', price: '0'},
        {name: 'Cerezas. ', src: 'Inventario_Cerezas.jpeg', descr: '', price: '0'},
        {name: 'Bolita Tamarindocon Azucar. ', src: 'Inventario_BolitaTamarindoconAzucar.jpeg', descr: '', price: '0'},
        {name: 'Arandano. ', src: 'Inventario_Arandano.jpeg', descr: '', price: '0'},
        {name: 'Café Artesanal Chiapas01. ', src: 'Inventario_CaféArtesanalChiapas01.jpeg', descr: '', price: '0'},
        {name: 'Ate Guayaba. ', src: 'Inventario_AteGuayaba.jpeg', descr: '', price: '0'},
        {name: 'Ajo Negro. ', src: 'Inventario_AjoNegro.jpeg', descr: '', price: '0'},
        {name: 'Malanga Dashitos Chipotle. ', src: 'Inventario_MalangaDashitosChipotle.jpeg', descr: '', price: '0'},
        {name: 'Chilede Arbol. ', src: 'Inventario_ChiledeArbol.jpeg', descr: '', price: '0'},
        {name: 'Crema Cera Carmen Pequeña. ', src: 'Inventario_CremaCeraCarmenPequeña.jpeg', descr: '', price: '0'},
        {name: 'Levadura Magidely. ', src: 'Inventario_LevaduraMagidely.jpeg', descr: '', price: '0'},
        {name: 'Malanga Dashitos Adobada. ', src: 'Inventario_MalangaDashitosAdobada.jpeg', descr: '', price: '0'},
        {name: 'Salcon Ajo. ', src: 'Inventario_SalconAjo.jpeg', descr: '', price: '0'},
        {name: 'Achiote El Yucateco. ', src: 'Inventario_AchioteElYucateco.jpeg', descr: '', price: '0'},
        {name: 'Mini Cocada. ', src: 'Inventario_MiniCocada.jpeg', descr: '', price: '0'},
        {name: 'Salvado Horneado. ', src: 'Inventario_SalvadoHorneado.jpeg', descr: '', price: '0'},
        {name: 'Alegria Combinada. ', src: 'Inventario_AlegriaCombinada.jpeg', descr: '', price: '0'},
        {name: 'Levadura Tradipan03. ', src: 'Inventario_LevaduraTradipan03.jpeg', descr: '', price: '0'},
        {name: 'Pasitas Chocolate. ', src: 'Inventario_PasitasChocolate.jpeg', descr: '', price: '0'},
        {name: 'Chile Ancho. ', src: 'Inventario_ChileAncho.jpeg', descr: '', price: '0'},

      ],
    
    }),
  }
</script>