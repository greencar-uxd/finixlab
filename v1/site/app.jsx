// App entry — wire everything into the DesignCanvas, organized by sitemap

const App = () => {
  return (
    <DesignCanvas>
      <DCSection
        id="ia"
        title="01 · Architecture"
        subtitle="Full site structure · global nav · page hierarchy"
      >
        <DCArtboard id="sitemap" label="Sitemap" width={1440} height={1100}>
          <IAArtboard />
        </DCArtboard>
      </DCSection>

      <DCSection
        id="home"
        title="02 · Home"
        subtitle="Editorial Hero — cream-led, honest editorial tone"
      >
        <DCArtboard id="home-desktop" label="Home · Desktop · /" width={1440} height={9400}>
          <HomeV1 />
        </DCArtboard>
        <DCArtboard id="home-mobile" label="Home · Mobile · 390px" width={390} height={4000}>
          <HomeMobile />
        </DCArtboard>
      </DCSection>

      <DCSection
        id="shop"
        title="03 · Shop"
        subtitle="Product list · sets · samples → product detail"
      >
        <DCArtboard id="shop-index" label="Shop Index · /shop" width={1440} height={3400}>
          <ShopPage />
        </DCArtboard>
        <DCArtboard id="p-peptosome" label="Product · Peptosome Skin Booster · /shop/peptosome" width={1440} height={7400}>
          <ProductPage />
        </DCArtboard>
      </DCSection>

      <DCSection
        id="science"
        title="04 · Science"
        subtitle="VAMTOXIN™ · SNARE mechanism · clinical data · Notox method"
      >
        <DCArtboard id="science" label="Science · /science" width={1440} height={5500}>
          <SciencePage />
        </DCArtboard>
      </DCSection>

      <DCSection
        id="journal"
        title="05 · Journal"
        subtitle="Editorial index · categories · pagination"
      >
        <DCArtboard id="journal" label="Journal · /journal" width={1440} height={4500}>
          <JournalPage />
        </DCArtboard>
      </DCSection>

      <DCSection
        id="about"
        title="06 · About"
        subtitle="Brand story · founder letter · four principles · lab · sustainability · clinic partners"
      >
        <DCArtboard id="about" label="About · /about" width={1440} height={5500}>
          <AboutPage />
        </DCArtboard>
      </DCSection>
    </DesignCanvas>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
