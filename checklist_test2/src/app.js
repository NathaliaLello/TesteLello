const hubspot = require('@hubspot/api-client');

const hubspotClient = new hubspot.Client({
});

const Extension = () => {
    return (
      <Checkbox
        checked={isSuperAdmin}
        name="adminCheck"
        description="Select to grant superpowers"
      >
        Super Admin
      </Checkbox>
    );
  };