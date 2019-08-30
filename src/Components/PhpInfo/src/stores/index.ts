import { get } from 'lodash-es'
import conf from '~components/Helper/src/components/conf'
import { observable, action } from 'mobx'

class PhpInfoStore {
  public ID = 'phpInfo'
  public conf = get(conf, this.ID)

  @observable public latestPhpVersion: string = ''
  @observable public latestPhpDate: string = ''

  @action
  public setLatestPhpVersion = (latestPhpVersion: string) => {
    this.latestPhpVersion = latestPhpVersion
  }

  @action
  public setLatestPhpDate = (latestPhpDate: string) => {
    this.latestPhpDate = latestPhpDate
  }
}

export default new PhpInfoStore()
