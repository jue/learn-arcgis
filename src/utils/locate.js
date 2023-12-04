import Locate from '@arcgis/core/Widgets/Locate'

export function setLocate(mapView) {
  const locate = new Locate({
    view: mapView,
    useHeadingEnabled: false,
    goToOverride(view, options) {
      options.target.scale = 1500
      return view.goTo(options.target)
    },
  })
  mapView.ui.add(locate, 'top-left')
}
