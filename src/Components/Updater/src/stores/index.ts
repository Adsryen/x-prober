import { observable, action, computed } from 'mobx'
import { template } from 'lodash-es'
import { gettext } from '~components/Language/src'
import BootstrapStore from '~components/Bootstrap/src/stores'
import ConfigStore from '~components/Config/src/stores'
import versionCompare from '~components/Helper/src/components/version-compare'

class UpdaterStore {
  @observable public isUpdating: boolean = false

  @computed
  get newVersion(): string {
    const { appConfig } = ConfigStore

    if (!appConfig || !appConfig.APP_VERSION) {
      return ''
    }

    return versionCompare(BootstrapStore.version, appConfig.APP_VERSION) === -1
      ? appConfig.APP_VERSION
      : ''
  }

  @action
  public setIsUpdating = (isUpdating: boolean) => {
    this.isUpdating = isUpdating
  }

  @computed
  get notiText(): string {
    if (this.newVersion) {
      return template(
        gettext(
          '✨ Found update! Version <%= oldVersion %> → <%= newVersion %>'
        )
      )({
        oldVersion: BootstrapStore.version,
        newVersion: this.newVersion,
      })
    }

    if (this.isUpdating) {
      return gettext('⏳ Updating...')
    }

    return ''
  }
}

export default new UpdaterStore()
