(function(){
    var script = {
 "shadow": false,
 "downloadEnabled": false,
 "start": "this.init()",
 "children": [
  "this.MainViewer",
  "this.IconButton_1E1C7714_0BA4_F559_419E_A1DE0E410092",
  "this.Label_1DC2C3A8_0BAC_AD49_41A4_EB63ADDB8E60",
  "this.Container_1C01C30D_0BA4_AD4B_4190_919C514EF8DF",
  "this.IconButton_03B791AB_161B_AD87_418A_B4718DC3DB14",
  "this.Label_034760C6_161B_AB8E_41AC_E9428C6373E0"
 ],
 "id": "rootPlayer",
 "width": "100%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "visible",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "definitions": [{
 "titleFontColor": "#000000",
 "shadowSpread": 1,
 "id": "window_126D8BD4_0B7D_7CD9_414E_C60E42C2533C",
 "titlePaddingTop": 5,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "footerBorderColor": "#000000",
 "modal": true,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "bodyBorderColor": "#000000",
 "footerBackgroundColorDirection": "vertical",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "titleFontWeight": "bold",
 "minWidth": 20,
 "backgroundColor": [],
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "propagateClick": false,
 "headerPaddingRight": 10,
 "title": "Lokasi",
 "height": 400,
 "contentOpaque": false,
 "bodyPaddingLeft": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "footerHeight": 5,
 "scrollBarColor": "#000000",
 "class": "Window",
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadow": true,
 "footerBorderSize": 0,
 "titlePaddingLeft": 5,
 "titleTextDecoration": "none",
 "closeButtonBackgroundColorRatios": [],
 "shadowVerticalLength": 0,
 "bodyPaddingTop": 5,
 "backgroundColorDirection": "vertical",
 "headerBackgroundOpacity": 1,
 "closeButtonIconLineWidth": 2,
 "scrollBarOpacity": 0.5,
 "children": [
  "this.htmlText_126FCBD4_0B7D_7CD9_41A0_8AC66391EF82"
 ],
 "shadowBlurRadius": 6,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerPaddingTop": 10,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "closeButtonBorderRadius": 11,
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "headerPaddingBottom": 10,
 "titleFontSize": "3.5vmin",
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "footerBackgroundOpacity": 1,
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPressedIconColor": "#FFFFFF",
 "footerBackgroundColor": [
  "#000000",
  "#000000",
  "#000000"
 ],
 "headerBorderColor": "#000000",
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "veilOpacity": 0.4,
 "layout": "vertical",
 "paddingBottom": 0,
 "paddingTop": 0,
 "bodyBackgroundColorDirection": "vertical",
 "headerBackgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "bodyPaddingRight": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerVerticalAlign": "middle",
 "data": {
  "name": "Window43276"
 },
 "headerBorderSize": 0,
 "titlePaddingRight": 5,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowHorizontalLength": 3,
 "titleFontFamily": "Times New Roman",
 "closeButtonBackgroundColor": [],
 "horizontalAlign": "center"
},
{
 "items": [
  {
   "media": "this.panorama_1D30380B_0B9D_FB4E_41A6_7CE487FF7BD1",
   "end": "this.trigger('tourEnded')",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_1D30380B_0B9D_FB4E_41A6_7CE487FF7BD1_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ],
  "class": "PanoramaCameraSequence",
  "restartMovementOnUserInteraction": false
 },
 "displayOriginPosition": {
  "yaw": 0,
  "hfov": 165,
  "class": "RotationalCameraDisplayPosition",
  "stereographicFactor": 1,
  "pitch": -90
 },
 "id": "panorama_1D30380B_0B9D_FB4E_41A6_7CE487FF7BD1_camera",
 "class": "PanoramaCamera",
 "displayMovements": [
  {
   "duration": 1000,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "linear"
  },
  {
   "duration": 3000,
   "targetStereographicFactor": 0,
   "class": "TargetRotationalCameraDisplayMovement",
   "easing": "cubic_in_out",
   "targetPitch": 0
  }
 ],
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "https://aiquiujgqifulvcdrdgq.supabase.co/storage/v1/object/public/imageintro//panorama_1D30380B_0B9D_FB4E_41A6_7CE487FF7BD1_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "https://aiquiujgqifulvcdrdgq.supabase.co/storage/v1/object/public/imageintro//panorama_1D30380B_0B9D_FB4E_41A6_7CE487FF7BD1_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "https://aiquiujgqifulvcdrdgq.supabase.co/storage/v1/object/public/imageintro//panorama_1D30380B_0B9D_FB4E_41A6_7CE487FF7BD1_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "https://aiquiujgqifulvcdrdgq.supabase.co/storage/v1/object/public/imageintro//panorama_1D30380B_0B9D_FB4E_41A6_7CE487FF7BD1_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "https://aiquiujgqifulvcdrdgq.supabase.co/storage/v1/object/public/imageintro//panorama_1D30380B_0B9D_FB4E_41A6_7CE487FF7BD1_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "https://aiquiujgqifulvcdrdgq.supabase.co/storage/v1/object/public/imageintro//panorama_1D30380B_0B9D_FB4E_41A6_7CE487FF7BD1_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "https://aiquiujgqifulvcdrdgq.supabase.co/storage/v1/object/public/imageintro//panorama_1D30380B_0B9D_FB4E_41A6_7CE487FF7BD1_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "https://aiquiujgqifulvcdrdgq.supabase.co/storage/v1/object/public/imageintro//panorama_1D30380B_0B9D_FB4E_41A6_7CE487FF7BD1_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "https://aiquiujgqifulvcdrdgq.supabase.co/storage/v1/object/public/imageintro//panorama_1D30380B_0B9D_FB4E_41A6_7CE487FF7BD1_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "https://aiquiujgqifulvcdrdgq.supabase.co/storage/v1/object/public/imageintro//panorama_1D30380B_0B9D_FB4E_41A6_7CE487FF7BD1_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "https://aiquiujgqifulvcdrdgq.supabase.co/storage/v1/object/public/imageintro//panorama_1D30380B_0B9D_FB4E_41A6_7CE487FF7BD1_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "https://aiquiujgqifulvcdrdgq.supabase.co/storage/v1/object/public/imageintro//panorama_1D30380B_0B9D_FB4E_41A6_7CE487FF7BD1_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "https://aiquiujgqifulvcdrdgq.supabase.co/storage/v1/object/public/imageintro//panorama_1D30380B_0B9D_FB4E_41A6_7CE487FF7BD1_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "https://aiquiujgqifulvcdrdgq.supabase.co/storage/v1/object/public/imageintro//panorama_1D30380B_0B9D_FB4E_41A6_7CE487FF7BD1_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "https://aiquiujgqifulvcdrdgq.supabase.co/storage/v1/object/public/imageintro//panorama_1D30380B_0B9D_FB4E_41A6_7CE487FF7BD1_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "https://aiquiujgqifulvcdrdgq.supabase.co/storage/v1/object/public/imageintro//panorama_1D30380B_0B9D_FB4E_41A6_7CE487FF7BD1_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "https://aiquiujgqifulvcdrdgq.supabase.co/storage/v1/object/public/imageintro//panorama_1D30380B_0B9D_FB4E_41A6_7CE487FF7BD1_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "https://aiquiujgqifulvcdrdgq.supabase.co/storage/v1/object/public/imageintro//panorama_1D30380B_0B9D_FB4E_41A6_7CE487FF7BD1_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "https://aiquiujgqifulvcdrdgq.supabase.co/storage/v1/object/public/imageintro//panorama_1D30380B_0B9D_FB4E_41A6_7CE487FF7BD1_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "https://aiquiujgqifulvcdrdgq.supabase.co/storage/v1/object/public/imageintro//panorama_1D30380B_0B9D_FB4E_41A6_7CE487FF7BD1_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "https://aiquiujgqifulvcdrdgq.supabase.co/storage/v1/object/public/imageintro//panorama_1D30380B_0B9D_FB4E_41A6_7CE487FF7BD1_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "https://aiquiujgqifulvcdrdgq.supabase.co/storage/v1/object/public/imageintro//panorama_1D30380B_0B9D_FB4E_41A6_7CE487FF7BD1_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "width": 2560,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 5,
      "height": 2560
     },
     {
      "url": "https://aiquiujgqifulvcdrdgq.supabase.co/storage/v1/object/public/imageintro//panorama_1D30380B_0B9D_FB4E_41A6_7CE487FF7BD1_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "width": 1536,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "https://aiquiujgqifulvcdrdgq.supabase.co/storage/v1/object/public/imageintro//panorama_1D30380B_0B9D_FB4E_41A6_7CE487FF7BD1_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "https://aiquiujgqifulvcdrdgq.supabase.co/storage/v1/object/public/imageintro//panorama_1D30380B_0B9D_FB4E_41A6_7CE487FF7BD1_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "vfov": 180,
 "thumbnailUrl": "https://aiquiujgqifulvcdrdgq.supabase.co/storage/v1/object/public/imageintro//panorama_1D30380B_0B9D_FB4E_41A6_7CE487FF7BD1_t.jpg",
 "hfovMin": "120%",
 "class": "Panorama",
 "label": "20250320_221902_228",
 "id": "panorama_1D30380B_0B9D_FB4E_41A6_7CE487FF7BD1",
 "hfovMax": 130,
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "titleFontColor": "#000000",
 "shadowSpread": 1,
 "id": "window_12809109_0B63_6D4B_4191_D2CCADDD239B",
 "titlePaddingTop": 5,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "modal": true,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "bodyBorderColor": "#000000",
 "footerBackgroundColorDirection": "vertical",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "titleFontWeight": "bold",
 "minWidth": 20,
 "backgroundColor": [],
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "propagateClick": false,
 "headerPaddingRight": 10,
 "title": "Kontak",
 "height": 500,
 "contentOpaque": false,
 "bodyPaddingLeft": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "footerHeight": 5,
 "scrollBarColor": "#000000",
 "class": "Window",
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadow": true,
 "titlePaddingLeft": 5,
 "titleTextDecoration": "none",
 "closeButtonBackgroundColorRatios": [],
 "shadowVerticalLength": 0,
 "bodyPaddingTop": 5,
 "backgroundColorDirection": "vertical",
 "headerBackgroundOpacity": 1,
 "closeButtonIconLineWidth": 2,
 "scrollBarOpacity": 0.5,
 "children": [
  "this.htmlText_128EC109_0B63_6D4B_4195_1C7A435B7050"
 ],
 "shadowBlurRadius": 6,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerPaddingTop": 10,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "closeButtonBorderRadius": 11,
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "headerPaddingBottom": 10,
 "titleFontSize": "3.5vmin",
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPressedIconColor": "#FFFFFF",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "headerBorderColor": "#000000",
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "veilOpacity": 0.4,
 "layout": "vertical",
 "paddingBottom": 0,
 "paddingTop": 0,
 "bodyBackgroundColorDirection": "vertical",
 "headerBackgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "bodyPaddingRight": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerVerticalAlign": "middle",
 "data": {
  "name": "Window50400"
 },
 "headerBorderSize": 0,
 "titlePaddingRight": 5,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowHorizontalLength": 3,
 "titleFontFamily": "Times New Roman",
 "closeButtonBackgroundColor": [],
 "horizontalAlign": "center"
},
{
 "duration": 400,
 "id": "effect_4B8711AA_571D_FDC6_41C4_8313D8AEEDC7",
 "class": "SlideInEffect",
 "easing": "quad_in",
 "from": "left"
},
{
 "titleFontColor": "#000000",
 "shadowSpread": 1,
 "id": "window_12A5E333_0B6D_AD5F_4175_8F79E58129A0",
 "titlePaddingTop": 5,
 "width": 400,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "scrollBarMargin": 2,
 "backgroundOpacity": 1,
 "closeButtonIconHeight": 12,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "paddingLeft": 0,
 "veilColorDirection": "horizontal",
 "titlePaddingBottom": 5,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "footerBorderColor": "#000000",
 "modal": true,
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "bodyBorderColor": "#000000",
 "footerBackgroundColorDirection": "vertical",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "titleFontWeight": "bold",
 "minWidth": 20,
 "backgroundColor": [],
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "titleFontStyle": "normal",
 "propagateClick": false,
 "headerPaddingRight": 10,
 "title": "Tour Information",
 "height": 600,
 "contentOpaque": false,
 "bodyPaddingLeft": 5,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "footerHeight": 5,
 "scrollBarColor": "#000000",
 "class": "Window",
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadow": true,
 "footerBorderSize": 0,
 "titlePaddingLeft": 5,
 "titleTextDecoration": "none",
 "closeButtonBackgroundColorRatios": [],
 "shadowVerticalLength": 0,
 "bodyPaddingTop": 5,
 "backgroundColorDirection": "vertical",
 "headerBackgroundOpacity": 1,
 "closeButtonIconLineWidth": 2,
 "scrollBarOpacity": 0.5,
 "children": [
  "this.htmlText_12A63333_0B6D_AD5F_4184_854C11BF46C2"
 ],
 "shadowBlurRadius": 6,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerPaddingTop": 10,
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "closeButtonBorderRadius": 11,
 "paddingRight": 0,
 "veilColorRatios": [
  0,
  1
 ],
 "headerPaddingBottom": 10,
 "titleFontSize": "3.5vmin",
 "shadowOpacity": 0.5,
 "borderRadius": 5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "footerBackgroundOpacity": 1,
 "backgroundColorRatios": [],
 "closeButtonIconWidth": 12,
 "bodyBorderSize": 0,
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonPressedIconColor": "#FFFFFF",
 "footerBackgroundColor": [
  "#000000",
  "#000000",
  "#000000"
 ],
 "headerBorderColor": "#000000",
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "gap": 10,
 "veilOpacity": 0.4,
 "layout": "vertical",
 "paddingBottom": 0,
 "paddingTop": 0,
 "bodyBackgroundColorDirection": "vertical",
 "headerBackgroundColorDirection": "vertical",
 "closeButtonIconColor": "#000000",
 "bodyPaddingBottom": 5,
 "bodyPaddingRight": 5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerVerticalAlign": "middle",
 "data": {
  "name": "Window41650"
 },
 "headerBorderSize": 0,
 "titlePaddingRight": 5,
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadowHorizontalLength": 3,
 "titleFontFamily": "Times New Roman",
 "closeButtonBackgroundColor": [],
 "horizontalAlign": "center"
},
{
 "duration": 400,
 "id": "effect_4C974746_571D_6541_41CE_76A308A87323",
 "class": "SlideInEffect",
 "easing": "quad_in",
 "from": "left"
},
{
 "duration": 400,
 "id": "effect_618C5950_7067_14DB_41DB_D2CA7B61EE3C",
 "class": "SlideOutEffect",
 "easing": "quad_in",
 "to": "left"
},
{
 "autoplay": true,
 "class": "MediaAudio",
 "audio": {
  "oggUrl": "https://aiquiujgqifulvcdrdgq.supabase.co/storage/v1/object/public/imageintro//audio_032B57ED_1618_9583_4191_37031C8AD278.ogg",
  "mp3Url": "https://aiquiujgqifulvcdrdgq.supabase.co/storage/v1/object/public/imageintro//audio_032B57ED_1618_9583_4191_37031C8AD278.mp3",
  "class": "AudioResource"
 },
 "id": "audio_032B57ED_1618_9583_4191_37031C8AD278",
 "data": {
  "label": "coffee-with-jazz-327479"
 }
},
{
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "gyroscopeVerticalDraggingEnabled": true,
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "mouseControlMode": "drag_acceleration"
},
{
 "duration": 400,
 "id": "effect_4D468A42_571D_AF46_41C4_8C8358C32FB0",
 "class": "SlideOutEffect",
 "easing": "quad_in",
 "to": "left"
},
{
 "playbackBarRight": 0,
 "toolTipFontWeight": "bold",
 "id": "MainViewer",
 "progressBarBorderSize": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "width": "100%",
 "playbackBarProgressBorderSize": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBarBorderRadius": 0,
 "paddingLeft": 0,
 "playbackBarBorderRadius": 0,
 "minHeight": 50,
 "toolTipShadowOpacity": 1,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "transitionDuration": 500,
 "toolTipShadowVerticalLength": 0,
 "minWidth": 100,
 "toolTipFontFamily": "Times New Roman",
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "borderSize": 0,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipShadowHorizontalLength": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "toolTipFontColor": "#606060",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "class": "ViewerArea",
 "shadow": false,
 "progressBarBackgroundColorDirection": "vertical",
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "displayTooltipInTouchScreens": true,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "paddingRight": 0,
 "transitionMode": "blending",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBorderSize": 0,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "paddingBottom": 0,
 "playbackBarHeadOpacity": 1,
 "paddingTop": 0,
 "toolTipBorderColor": "#767676",
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#000000",
 "playbackBarBottom": 5,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "toolTipShadowSpread": 0,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "3vmin",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBackgroundColorDirection": "vertical",
 "data": {
  "name": "Main Viewer"
 },
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeight": 10,
 "playbackBarHeadWidth": 6
},
{
 "horizontalAlign": "center",
 "id": "IconButton_1E1C7714_0BA4_F559_419E_A1DE0E410092",
 "width": 77.35,
 "right": "12.14%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_1E1C7714_0BA4_F559_419E_A1DE0E410092_rollover.png",
 "bottom": "9.41%",
 "propagateClick": false,
 "minWidth": 0,
 "height": 72,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "click": "window.location.href='https://virtual-tour-upn-veteran-yogyakarta.vercel.app/';",
 "iconURL": "skin/IconButton_1E1C7714_0BA4_F559_419E_A1DE0E410092.png",
 "class": "IconButton",
 "data": {
  "name": "Button27670"
 },
 "pressedIconURL": "skin/IconButton_1E1C7714_0BA4_F559_419E_A1DE0E410092_pressed.png",
 "shadow": false,
 "cursor": "hand"
},
{
 "shadow": false,
 "fontFamily": "Times New Roman",
 "textDecoration": "none",
 "id": "Label_1DC2C3A8_0BAC_AD49_41A4_EB63ADDB8E60",
 "width": "30.616%",
 "textShadowColor": "#000000",
 "textShadowBlurRadius": 0,
 "textShadowVerticalLength": 1,
 "verticalAlign": "middle",
 "backgroundOpacity": 0.52,
 "paddingRight": 0,
 "right": "0.03%",
 "paddingLeft": 0,
 "textShadowOpacity": 0.79,
 "text": "Start Virtual Tour",
 "minHeight": 1,
 "borderRadius": 0,
 "bottom": "0.12%",
 "backgroundColorRatios": [],
 "propagateClick": false,
 "textShadowHorizontalLength": -3,
 "minWidth": 1,
 "backgroundColor": [],
 "borderSize": 0,
 "height": "8.575%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "fontSize": "7vmin",
 "fontColor": "#000000",
 "class": "Label",
 "fontStyle": "normal",
 "data": {
  "name": "Label20212"
 },
 "fontWeight": "normal",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "center"
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_1C01130A_0BA4_AD4E_41A0_E3223D4F092C",
  "this.Container_1C01C30A_0BA4_AD4E_417F_DAB08244B8B8"
 ],
 "id": "Container_1C01C30D_0BA4_AD4B_4190_919C514EF8DF",
 "left": "0%",
 "width": 312.6,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "propagateClick": false,
 "minWidth": 1,
 "height": "100%",
 "top": "0%",
 "gap": 10,
 "borderSize": 0,
 "layout": "absolute",
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "--- LEFT PANEL"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "center",
 "id": "IconButton_03B791AB_161B_AD87_418A_B4718DC3DB14",
 "width": 40,
 "right": "2.56%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 0,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_03B791AB_161B_AD87_418A_B4718DC3DB14_rollover.png",
 "propagateClick": false,
 "minWidth": 0,
 "height": 40,
 "top": "0.1%",
 "mode": "toggle",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": false,
 "paddingTop": 0,
 "click": "if(this.getGlobalAudio(this.audio_032B57ED_1618_9583_4191_37031C8AD278).get('state') == 'playing') { this.pauseGlobalAudio(this.audio_032B57ED_1618_9583_4191_37031C8AD278); } else { var src = this.playGlobalAudio(this.audio_032B57ED_1618_9583_4191_37031C8AD278); var stateChangeFunc = function(){ if(src.get('state') == 'playing'){ this.pauseGlobalAudios(src.get('id'), [src]); } else { this.resumeGlobalAudios(src.get('id')); src.unbind('stateChange', stateChangeFunc, this); } }; src.bind('stateChange', stateChangeFunc, this); }",
 "iconURL": "skin/IconButton_03B791AB_161B_AD87_418A_B4718DC3DB14.png",
 "class": "IconButton",
 "data": {
  "name": "Button46351"
 },
 "pressedIconURL": "skin/IconButton_03B791AB_161B_AD87_418A_B4718DC3DB14_pressed.png",
 "shadow": false,
 "cursor": "hand"
},
{
 "textDecoration": "none",
 "fontFamily": "Times New Roman",
 "id": "Label_034760C6_161B_AB8E_41AC_E9428C6373E0",
 "width": "7.849%",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "right": "0%",
 "text": "Musik",
 "minHeight": 1,
 "borderRadius": 0,
 "paddingLeft": 0,
 "propagateClick": false,
 "minWidth": 1,
 "height": "4.342%",
 "top": "6.31%",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "fontSize": "3vmin",
 "fontColor": "#000000",
 "class": "Label",
 "fontStyle": "normal",
 "data": {
  "name": "Label17846"
 },
 "fontWeight": "bold",
 "shadow": false,
 "horizontalAlign": "center"
},
{
 "id": "htmlText_126FCBD4_0B7D_7CD9_41A0_8AC66391EF82",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 10,
 "minWidth": 0,
 "propagateClick": false,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 10,
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:20px;font-family:'Times New Roman', Times, serif;\">Kampus 1 UPN \"Veteran\" Yogyakarta</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:20px;font-family:'Times New Roman', Times, serif;\">Jl. Padjajaran (Lingkar Utara) No. 104</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:20px;font-family:'Times New Roman', Times, serif;\">Ngropoh, Condongcatur, Kec. Depok</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:20px;font-family:'Times New Roman', Times, serif;\">Kabupaten Sleman, Daerah Istimewa Yogyakarta 55283</SPAN></SPAN></DIV></div>",
 "class": "HTMLText",
 "data": {
  "name": "HTMLText43277"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "id": "htmlText_128EC109_0B63_6D4B_4195_1C7A435B7050",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 10,
 "minWidth": 0,
 "propagateClick": false,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 10,
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:20px;font-family:'Times New Roman', Times, serif;\">Email : 117210012@student.upnvyk.ac.id</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:20px;font-family:'Times New Roman', Times, serif;\">No. HP : +62-856-0293-9103</SPAN></SPAN></DIV></div>",
 "class": "HTMLText",
 "data": {
  "name": "HTMLText50401"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "id": "htmlText_12A63333_0B6D_AD5F_4184_854C11BF46C2",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 10,
 "minWidth": 0,
 "propagateClick": false,
 "borderSize": 0,
 "height": "100%",
 "paddingBottom": 10,
 "paddingTop": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:17px;font-family:'Times New Roman', Times, serif;\">Laboratorium Riset Terpadu UPN \u201cVeteran\u201d Yogyakarta merupakan fasilitas riset unggulan yang dibangun untuk mendukung kegiatan penelitian lintas disiplin di lingkungan universitas. Pembangunan gedung ini dimulai pada tahun 2019 dan secara resmi diresmikan pada tanggal 28 Juni 2021. Gedung ini terdiri atas empat lantai dan satu rooftop, dengan luas bangunan mencapai kurang lebih 2.800 meter persegi.</SPAN></SPAN></DIV><DIV STYLE=\"text-align:justify;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:17px;font-family:'Times New Roman', Times, serif;\">Laboratorium ini dirancang sebagai pusat kolaborasi antara fakultas, pusat studi, dan mitra eksternal, baik dari dunia industri maupun lembaga pemerintah. Berlokasi di Kampus Condongcatur, Sleman, gedung ini menjadi simbol komitmen UPN \u201cVeteran\u201d Yogyakarta dalam memajukan riset, inovasi, dan pengembangan teknologi. Dilengkapi dengan fasilitas modern dan sistem manajemen laboratorium berbasis digital, Laboratorium Riset Terpadu berperan penting dalam mendukung kegiatan akademik, program Merdeka Belajar Kampus Merdeka (MBKM), serta pengembangan produk riset yang berdampak nyata bagi masyarakat</SPAN><SPAN STYLE=\"font-size:17px;\">.</SPAN></SPAN></DIV></div>",
 "class": "HTMLText",
 "data": {
  "name": "HTMLText41651"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "horizontalAlign": "left",
 "children": [
  "this.Container_1C01030A_0BA4_AD4E_4183_0C2F9F3BB908",
  "this.IconButton_1C01330A_0BA4_AD4E_419A_847C1E369DA4"
 ],
 "id": "Container_1C01130A_0BA4_AD4E_41A0_E3223D4F092C",
 "left": "0%",
 "width": 66,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "propagateClick": true,
 "minWidth": 1,
 "height": "100%",
 "top": "0%",
 "gap": 10,
 "borderSize": 0,
 "layout": "absolute",
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "- COLLAPSE"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "horizontalAlign": "left",
 "children": [
  "this.Container_1C01930A_0BA4_AD4E_417E_417095D79B45",
  "this.Container_1C00B30D_0BA4_AD4B_415C_16F790886E3D",
  "this.Image_12B92FE7_0B9C_D4C7_4161_80E3BA8A7F16",
  "this.Image_1183A28F_0B9C_AF47_4193_DF871C0A19A5"
 ],
 "id": "Container_1C01C30A_0BA4_AD4E_417F_DAB08244B8B8",
 "width": 300,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.7,
 "paddingRight": 40,
 "right": "0%",
 "verticalAlign": "top",
 "paddingLeft": 40,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "top": "0%",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "propagateClick": true,
 "gap": 10,
 "borderSize": 0,
 "layout": "absolute",
 "height": "100%",
 "paddingBottom": 40,
 "paddingTop": 40,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "- EXPANDED"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "scrollBarOpacity": 0.5
},
{
 "shadow": false,
 "id": "Container_1C01030A_0BA4_AD4E_4183_0C2F9F3BB908",
 "left": "0%",
 "width": 36,
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.4,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "scrollBarVisible": "rollOver",
 "borderRadius": 0,
 "top": "0%",
 "backgroundColorRatios": [
  0
 ],
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 1,
 "propagateClick": true,
 "gap": 10,
 "borderSize": 0,
 "layout": "absolute",
 "height": "100%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "Container black"
 },
 "visible": false,
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 80,
 "maxWidth": 80,
 "id": "IconButton_1C01330A_0BA4_AD4E_419A_847C1E369DA4",
 "left": 10,
 "width": 50,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "top": "40%",
 "rollOverIconURL": "skin/IconButton_1C01330A_0BA4_AD4E_419A_847C1E369DA4_rollover.png",
 "bottom": "40%",
 "propagateClick": true,
 "minWidth": 1,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_1C01C30A_0BA4_AD4E_417F_DAB08244B8B8, true, 0, this.effect_4B8711AA_571D_FDC6_41C4_8313D8AEEDC7, 'showEffect', false); this.setComponentVisibility(this.Container_1C01130A_0BA4_AD4E_41A0_E3223D4F092C, false, 0, this.effect_4D468A42_571D_AF46_41C4_8C8358C32FB0, 'hideEffect', false)",
 "iconURL": "skin/IconButton_1C01330A_0BA4_AD4E_419A_847C1E369DA4.png",
 "class": "IconButton",
 "data": {
  "name": "IconButton arrow"
 },
 "shadow": false,
 "cursor": "hand",
 "horizontalAlign": "center"
},
{
 "children": [
  "this.Container_1C01830A_0BA4_AD4E_4194_DDC18EDD761E",
  "this.Button_1C01B30A_0BA4_AD4E_41A0_92738906F44B",
  "this.Container_1C01A30A_0BA4_AD4E_41A2_CFB483C48153",
  "this.Button_1C00530A_0BA4_AD4E_4153_37A12802740C",
  "this.Container_1C00430D_0BA4_AD4B_4198_E8E8BFC98F2D",
  "this.Button_1C00730D_0BA4_AD4B_41A2_56ED53675AC4",
  "this.Container_1C00630D_0BA4_AD4B_4191_B44241BF4BEF",
  "this.Button_1C00030D_0BA4_AD4B_419B_B0E75748BBF0",
  "this.Container_1C00330D_0BA4_AD4B_41A2_50A8810EE83F",
  "this.Button_1C00230D_0BA4_AD4B_4131_C072320C7FCE",
  "this.Container_1C00C30D_0BA4_AD4B_418B_BBA04F1DDC27",
  "this.Button_1C00930D_0BA4_AD4B_4174_CEDAA6E98DBA",
  "this.Container_1C00830D_0BA4_AD4B_41A4_123034D1D037"
 ],
 "id": "Container_1C01930A_0BA4_AD4E_417E_417095D79B45",
 "left": "0%",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "middle",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "bottom": "49.48%",
 "propagateClick": true,
 "minWidth": 1,
 "layout": "vertical",
 "top": "17.5%",
 "gap": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "-Container buttons"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.HTMLText_1C03530D_0BA4_AD4B_4198_FD48CD041814",
  "this.IconButton_1C01D30D_0BA4_AD4B_41A4_78152AE7242C"
 ],
 "id": "Container_1C00B30D_0BA4_AD4B_415C_16F790886E3D",
 "left": "0%",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "bottom",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "bottom": "0%",
 "minWidth": 1,
 "propagateClick": true,
 "gap": 10,
 "borderSize": 0,
 "layout": "vertical",
 "height": "28.347%",
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "-Container footer"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 1095,
 "maxWidth": 1095,
 "id": "Image_12B92FE7_0B9C_D4C7_4161_80E3BA8A7F16",
 "left": "14.18%",
 "verticalAlign": "top",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "right": "14.16%",
 "url": "skin/Image_12B92FE7_0B9C_D4C7_4161_80E3BA8A7F16.jpg",
 "paddingLeft": 0,
 "minHeight": 30,
 "borderRadius": 0,
 "top": "0.34%",
 "propagateClick": true,
 "minWidth": 40,
 "height": "16.399%",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "data": {
  "name": "Image Company"
 },
 "shadow": false,
 "scaleMode": "fill",
 "horizontalAlign": "left"
},
{
 "maxHeight": 1095,
 "maxWidth": 1095,
 "id": "Image_1183A28F_0B9C_AF47_4193_DF871C0A19A5",
 "left": "27.74%",
 "verticalAlign": "top",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "right": "31.32%",
 "url": "skin/Image_1183A28F_0B9C_AF47_4193_DF871C0A19A5.png",
 "paddingLeft": 0,
 "minHeight": 30,
 "borderRadius": 0,
 "bottom": "30.46%",
 "propagateClick": true,
 "minWidth": 40,
 "height": "13.098%",
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "class": "Image",
 "data": {
  "name": "Image Company"
 },
 "shadow": false,
 "scaleMode": "fill",
 "horizontalAlign": "left"
},
{
 "shadow": false,
 "id": "Container_1C01830A_0BA4_AD4E_4194_DDC18EDD761E",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 1,
 "minWidth": 1,
 "propagateClick": true,
 "gap": 10,
 "borderSize": 0,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "line"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_1C01B30A_0BA4_AD4E_41A0_92738906F44B",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 50,
 "mode": "push",
 "borderSize": 0,
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Tour Information",
 "paddingTop": 0,
 "gap": 5,
 "fontSize": 18,
 "click": "this.showWindow(this.window_12A5E333_0B6D_AD5F_4175_8F79E58129A0, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button Tour Info"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000",
 "horizontalAlign": "left"
},
{
 "shadow": false,
 "id": "Container_1C01A30A_0BA4_AD4E_41A2_CFB483C48153",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 1,
 "minWidth": 1,
 "propagateClick": true,
 "gap": 10,
 "borderSize": 0,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "line"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "visible": false,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_1C00530A_0BA4_AD4E_4153_37A12802740C",
 "width": "100%",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 50,
 "borderColor": "#000000",
 "mode": "push",
 "borderSize": 0,
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Panorama List",
 "paddingTop": 0,
 "gap": 23,
 "fontSize": 18,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "visible": false,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button Panorama List"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "horizontalAlign": "left"
},
{
 "shadow": false,
 "id": "Container_1C00430D_0BA4_AD4B_4198_E8E8BFC98F2D",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 1,
 "minWidth": 1,
 "propagateClick": true,
 "gap": 10,
 "borderSize": 0,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "line"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_1C00730D_0BA4_AD4B_41A2_56ED53675AC4",
 "width": 220,
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "pressedLabel": "Location",
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "borderColor": "#000000",
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "mode": "push",
 "height": 50,
 "borderSize": 0,
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Location",
 "paddingTop": 0,
 "gap": 5,
 "fontSize": 18,
 "click": "this.showWindow(this.window_126D8BD4_0B7D_7CD9_414E_C60E42C2533C, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button Location"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "horizontalAlign": "left"
},
{
 "shadow": false,
 "id": "Container_1C00630D_0BA4_AD4B_4191_B44241BF4BEF",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 1,
 "minWidth": 1,
 "propagateClick": true,
 "gap": 10,
 "borderSize": 0,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "line"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "visible": false,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_1C00030D_0BA4_AD4B_419B_B0E75748BBF0",
 "width": "100%",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 50,
 "borderColor": "#000000",
 "mode": "push",
 "borderSize": 0,
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Floorplan",
 "paddingTop": 0,
 "gap": 5,
 "fontSize": 18,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "visible": false,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button Floorplan"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "horizontalAlign": "left"
},
{
 "shadow": false,
 "id": "Container_1C00330D_0BA4_AD4B_41A2_50A8810EE83F",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 1,
 "minWidth": 1,
 "propagateClick": true,
 "gap": 10,
 "borderSize": 0,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "line"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_1C00230D_0BA4_AD4B_4131_C072320C7FCE",
 "width": "100%",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 50,
 "borderColor": "#000000",
 "mode": "push",
 "borderSize": 0,
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Photoalbum",
 "paddingTop": 0,
 "gap": 5,
 "fontSize": 18,
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "visible": false,
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button Photoalbum"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "horizontalAlign": "left"
},
{
 "shadow": false,
 "id": "Container_1C00C30D_0BA4_AD4B_418B_BBA04F1DDC27",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 1,
 "minWidth": 1,
 "propagateClick": true,
 "gap": 10,
 "borderSize": 0,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "line"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "visible": false,
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "backgroundColorDirection": "vertical",
 "fontFamily": "Oswald",
 "shadowSpread": 1,
 "textDecoration": "none",
 "id": "Button_1C00930D_0BA4_AD4B_4174_CEDAA6E98DBA",
 "width": "100%",
 "fontColor": "#FFFFFF",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "borderRadius": 0,
 "shadowBlurRadius": 6,
 "iconBeforeLabel": true,
 "paddingLeft": 10,
 "shadowColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "pressedBackgroundOpacity": 1,
 "minWidth": 1,
 "height": 50,
 "mode": "push",
 "borderSize": 0,
 "layout": "horizontal",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "paddingBottom": 0,
 "label": "Contact Information",
 "paddingTop": 0,
 "gap": 5,
 "fontSize": 18,
 "click": "this.showWindow(this.window_12809109_0B63_6D4B_4191_D2CCADDD239B, null, false)",
 "iconWidth": 32,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "class": "Button",
 "fontStyle": "italic",
 "rollOverBackgroundOpacity": 0.8,
 "data": {
  "name": "Button Contact"
 },
 "fontWeight": "normal",
 "shadow": false,
 "cursor": "hand",
 "borderColor": "#000000",
 "horizontalAlign": "left"
},
{
 "shadow": false,
 "id": "Container_1C00830D_0BA4_AD4B_41A4_123034D1D037",
 "width": "100%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.3,
 "paddingRight": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "paddingLeft": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorRatios": [
  0,
  1
 ],
 "height": 1,
 "minWidth": 1,
 "propagateClick": true,
 "gap": 10,
 "borderSize": 0,
 "layout": "absolute",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "paddingBottom": 0,
 "paddingTop": 0,
 "contentOpaque": false,
 "class": "Container",
 "data": {
  "name": "line"
 },
 "scrollBarColor": "#000000",
 "backgroundColorDirection": "vertical",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_1C03530D_0BA4_AD4B_4198_FD48CD041814",
 "width": "98.636%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "paddingLeft": 0,
 "propagateClick": true,
 "minWidth": 1,
 "height": 85.4,
 "borderSize": 0,
 "paddingBottom": 0,
 "paddingTop": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:10px;font-family:'Oswald Regular';\"><B>Program Studi Teknik Geomatika</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:10px;font-family:'Oswald Regular';\"><B>Jurusan Teknik Geologi</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:10px;font-family:'Oswald Regular';\"><B>Fakultas Teknologi Mineral dan Energi</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:10px;font-family:'Oswald Regular';\"><B>UPN \"Veteran\" Yogyakarta</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:10px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p></div>",
 "class": "HTMLText",
 "data": {
  "name": "HTMLText47602"
 },
 "scrollBarColor": "#000000",
 "shadow": false,
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 80,
 "maxWidth": 80,
 "id": "IconButton_1C01D30D_0BA4_AD4B_41A4_78152AE7242C",
 "width": 42,
 "verticalAlign": "middle",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingLeft": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_1C01D30D_0BA4_AD4B_41A4_78152AE7242C_rollover.png",
 "propagateClick": true,
 "minWidth": 1,
 "height": 42,
 "mode": "push",
 "borderSize": 0,
 "paddingBottom": 0,
 "transparencyActive": true,
 "paddingTop": 0,
 "click": "this.setComponentVisibility(this.Container_1C01C30A_0BA4_AD4E_417F_DAB08244B8B8, false, 0, this.effect_618C5950_7067_14DB_41DB_D2CA7B61EE3C, 'hideEffect', false); this.setComponentVisibility(this.Container_1C01130A_0BA4_AD4E_41A0_E3223D4F092C, true, 0, this.effect_4C974746_571D_6541_41CE_76A308A87323, 'showEffect', false)",
 "iconURL": "skin/IconButton_1C01D30D_0BA4_AD4B_41A4_78152AE7242C.png",
 "class": "IconButton",
 "data": {
  "name": "IconButton collapse"
 },
 "shadow": false,
 "cursor": "hand",
 "horizontalAlign": "center"
}],
 "desktopMipmappingEnabled": false,
 "propagateClick": false,
 "minWidth": 20,
 "backgroundPreloadEnabled": true,
 "borderSize": 0,
 "layout": "absolute",
 "height": "100%",
 "paddingBottom": 0,
 "mobileMipmappingEnabled": false,
 "gap": 10,
 "paddingTop": 0,
 "vrPolyfillScale": 1,
 "contentOpaque": false,
 "scripts": {
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "existsKey": function(key){  return key in window; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getKey": function(key){  return window[key]; },
  "unregisterKey": function(key){  delete window[key]; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "registerKey": function(key, value){  window[key] = value; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); }
 },
 "class": "Player",
 "data": {
  "name": "Player14787"
 },
 "scrollBarColor": "#000000",
 "mouseWheelEnabled": true,
 "defaultVRPointer": "laser",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
