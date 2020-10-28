import React from 'react'

const ProfileAppSettings = ({ settings }) => {
    return (
        <div className="card">
            <div className="card-header">
                <div className="media">
                    <div className="media-body">
                        <p className="text-muted mb-0">App Settings:</p>
                    </div>
                </div>
            </div>
            <div className="card-body">
                <div className="form-group">
                    <label className="form-label">API Server URL:</label>
                    <input className="form-control" type="text" disabled readOnly 
                        value={settings.appSettings.baseAPI} />
                </div>
            </div>
        </div>
    )
}

export default ProfileAppSettings;
