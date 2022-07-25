const clearVersion2DbFiles = require('./migrate/clearVersion2DbFiles')
const migrateStorageFormat = require('./migrate/migrateStorageFormat')

const { ipcMain } = require('electron')

exports.runMigrations = async () => {
    const clearedDbFiles = await clearVersion2DbFiles()
    if (clearedDbFiles) {
        ipcMain.emit('clearVersion2DbFiles')
    }

    await migrateStorageFormat()
}