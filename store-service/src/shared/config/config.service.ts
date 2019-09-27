import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as fs from 'fs';

@Injectable()
export class ConfigService {

    /**
     * 
     * @param filePath 配置文件(.env文件)路径
     * @param key 配置文件中的key值
     * @param defaultValue 默认值, 配置取不到时返回
     */
    get(key: string, defaultValue: string, filePath?: string): string {
        let configValue;
        if (!filePath) {
            filePath = 'application'
        }
        if (fs.existsSync(filePath)) {
            let envConfig = dotenv.parse(fs.readFileSync(filePath));
            let configValue = envConfig[key];
        }

        if (configValue == undefined || configValue == null) {
            configValue = defaultValue;
        }

        return configValue;
    }
}