function mySettings(props) {
 let screenWidth = props.settingsStorage.getItem("screenWidth");
  let screenHeight = props.settingsStorage.getItem("screenHeight");

      const { settings, settingsStorage } = props;

    let kpayStatusMessage = settings.kpayStatus || "Unlicensed product. Trial period in progress.";
    let endTrialVisible = (settings.btnEndTrialVisible === undefined ? false : JSON.parse(settings.btnEndTrialVisible));
    if (kpayStatusMessage == 'trial') {
      kpayStatusMessage = getTrialEndsInMessage(props);
    }
  return (
    <Page>
        <Section title={<Text bold align="center">Product Status</Text>}>
          <Text align="center">{`${kpayStatusMessage}`}</Text>
          { endTrialVisible && <Toggle settingsKey="kpayPurchase" label="End Trial Now" /> }  
        </Section>
      
      
      <Section title={<Text bold align="center">Weather</Text>}>
              <Select
                label={`< SELECT > Weather Update Interval`}
                settingsKey="weatherInterval"
                options={[
                  {name:"Every 30 min", value:"30"},
                  {name:"Every hour", value:"60"},
                  {name:"Every 2 hours", value:"120"},
                  {name:"Every 4 hours", value:"240"}
                ]}
              />

              <Select
                label={`< SELECT > Temperature Format`}
                settingsKey="weatherTemperature"
                options={[
                  {name:"Celsius", value:"C"},
                  {name:"Fahrenheit", value:"F"}
                ]}
              /> 
      </Section>
      
      <Section>
            <Toggle
             settingsKey="battery"
             label="Show Battery"
            />
      
      </Section>  
      
      <ImagePicker
          title="Image"
          description="Watch image is 100% width x 100% height (ie. full screen)"
          label="< PICK AN IMAGE >"
          settingsKey="background-image"
          imageWidth={ screenWidth }
          imageHeight={ screenHeight }
        />
      
      

      
      <Section
                title={<Text bold align="center">Time Format</Text>}>
                <Text>Your time format (12/24hrs) is set via your fitbit web profile page here,  <Link source="https://www.fitbit.com/settings/profile">Fitbit Profile</Link></Text>
      </Section>
            
                <Section
                title={<Text bold align="center">No weather!</Text>}>
          <Text>For help visit,  <Link source="https://www.chopsfitbitfaces.com/faq-help">chopsfitbitfaces - faq/help</Link></Text>
      
      </Section>      
      
      
          <Text>For more of my other watchfaces visit,  <Link source="https://www.chopsfitbitfaces.com/">chopsfitbitfaces</Link></Text>

          <Text>Thankyou. Enjoy!</Text>

    </Page>
  );
}

function getTrialEndsInMessage(props) {
  let trialEndDate = props.settings.kpayTrialEndDate;
  let trialDuration = trialEndDate ? trialEndDate - new Date().getTime() : 0;
  if (!trialEndDate) {
    //there has not been any contact with the server yet, so trail time left is unknown
    return "Unlicensed product. Trial period in progress.";
  }
  
  if (trialDuration > 0) {
    return `Unlicensed product. Trial ends in ${getFuzzyDuration(trialDuration)}`;
  }
  
  // Returned in the case where the user ended the trial early,
  // and while in this condition, the trial period also ended.
  return "Unlicensed product. Trial period ended.";
}


function getFuzzyDuration(durationInMilliseconds) {
  //get duration in minutes, rounded up
  let durationInMinutes = Math.ceil(durationInMilliseconds / 60000.0);
  let numberOfHours = Math.floor(durationInMinutes / 60);
  let numberOfMinutes = durationInMinutes % 60;
  
  let fuzzyDuration = "";
  if (numberOfHours > 0) {
    fuzzyDuration = `${numberOfHours} hrs, `;
  }
  return fuzzyDuration + `${numberOfMinutes} min.`;
}

registerSettingsPage(mySettings);
