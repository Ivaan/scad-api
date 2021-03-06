import * as primitives3d from './primitives3d'
import * as primitives2d from './primitives2d'
import * as booleanOps from './ops-booleans'
import * as transformations from './ops-transformations'
import * as extrusions from './ops-extrusions'
import * as color from './color'
import * as maths from './maths'
import * as text from './text'
import { echo } from './debug'

// these are 'external' to this folder ...needs to be reviewed
import { CAG, CSG } from '@jscad/csg'
import { log } from './log' // FIXME: this is a duplicate of the one in openjscad itself,
// mostly likely needs to be removed since it is in the OpenJsCad namespace anyway, leaving here
// for now

const exportedApi = {
  csg: {CAG, CSG},
  primitives2d,
  primitives3d,
  booleanOps,
  transformations,
  extrusions,
  color,
  maths,
  text,
  OpenJsCad: {OpenJsCad: {log}},
  debug: {echo}
}

export default exportedApi
