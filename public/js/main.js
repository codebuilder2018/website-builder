const editor = grapesjs.init({
    // Indicate where to init the editor. You can also pass an HTMLElement
    container: '#editor',
    // Get the content for the canvas directly from the element
    // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
    fromElement: true,
    // Size of the editor
    //height: '300px',
    width: 'auto',
    // Disable the storage manager for the moment
    storageManager: false,
    plugins: ["gjs-blocks-basic"],
    pluginsOpts: {
      "gjs-blocks-basic": {

      }
    },
    blockManager: {
      appendTo: "#blocks"
    },
    storageManager: {
      type: 'remote',
      stepsBeforeSave: 3,
      contentTypeJson: true,
      storeComponents: true,
      storeStyles: true,
      storeHtml: true,
      storeCss: true,
      headers: {
        'Content-Type': 'application/json',
      },
      id: 'mycustom-',
      urlStore: `/pages/${location.pathname.split('/')[2]}/content`,
      urlLoad: `/pages/${location.pathname.split('/')[2]}/content`,
    },
    layerManager: {
      appendTo: "#layers-container"
    },
    styleManager: {
      appendTo: "#styles-container",
      sectors: [
        {
          name: "Dimension",
          open: false,
          buildProps: [
            "width",
            "min-height",
            "padding"
          ],
          properties: [
            {
              type: "integer",
              name: "The Width",
              property: 'width',
              units: ['px', '%'],
              defaults: 'auto',
              min: 0,
            }
          ]
        }
      ]
    },
    traitManager: {
      appendTo: "#trait-container"
    },
    selectorManager: {
      appendTo: '#styles-container',
    },
    panels: {
      defaults: [
        {
          id: "panel__basic__actions",
          el: ".panel__basic__actions",
          buttons: [
            {
              id: 'visibility',
              active: true, // active by default
              className: 'btn-toggle-borders',
              label: '<i class="fa fa-clone"></i>',
              command: 'sw-visibility', // Built-in command
            },            
          ]
        },
        {
          id: 'panel-devices',
          el: '.panel__devices',
          buttons: [
            {
              id: 'device-desktop',
              label: '<i class="fa fa-television"></i>',
              command: 'set-device-desktop',
              active: true,
              togglable: false,
            },
            {
              id: 'device-mobile',
              label: '<i class="fa fa-mobile"></i>',
              command: 'set-device-mobile',
              togglable: false,
            },
          ],
        },
      ]
    },
    deviceManager: {
      devices: [
        {
          name: "Desktop",
          width: "",
        },
        {
          name: "Mobile",
          width: "320px",
          widthMedia: "480px"
        }
      ]
    }
    // Avoid any default panel
   // panels: { defaults: [] },
   //plugins: ['gjs-preset-webpage'],
   //pluginsOpts: {
        //'gjs-preset-webpage': {
          // options
        //}
    //}
});

// Commands
editor.Commands.add('set-device-desktop', {
  run: (editor) => editor.setDevice('Desktop'),
});
editor.Commands.add('set-device-mobile', {
  run: (editor) => editor.setDevice('Mobile'),
});