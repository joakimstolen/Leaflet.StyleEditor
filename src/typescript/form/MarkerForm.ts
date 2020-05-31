import { Form } from '.'
import { ColorElement, FormElementClass, SizeElement}  from '../formElements'
import { StyleEditorImpl } from '../StyleEditorImpl'

const formOptionKey = 'marker'
const formElements: Record<string, FormElementClass> = {
  //'icon': new IconElement(),
  'color': ColorElement,
  'size': SizeElement
  //'popupContent': new PopupContentElement()
}

/** Form used to enable modification of a Geometry */
export class MarkerForm extends Form {

  constructor(styleEditor: StyleEditorImpl, parentUiElement: HTMLElement) {
    super(styleEditor, formOptionKey, parentUiElement, formElements)
  }
}
