module.exports = class staticAuthzConfig
{
    constructor(config)
    {  
      
    }
    getPackages()
    {
       return [
       {name:"binary-file",version:"0.2.1"},
           {name:"uuid",version:"3.3.3"},
           {name:"redis",version:"2.8.0"},
       ]
    } 
    getVersionedPackages()
    { 
      return []
    }
    geInternaltPackages()
    {
       return ['account']
    } 
    getVersion()
    {
      return '0.0.1'
    }
    getDefaultConfig()
    {
      return {}
    }
}