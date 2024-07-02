const regex =
  /(s:(([^\s]+).+?(?== \{))(= \{\n)(.+?(region_state:([A-Za-z][A-Za-z][A-Za-z])))(=\{[\s\S]*?)(\n.*?((create_building=\{\s*building="building_coal_mine"))\s*level=([0-9]+)))/;

const string = `  s:STATE_CROWNPEAK = {
		region_state:DUM={
			create_building={
				building="building_government_administration"
				level=10
				reserves=1
				activate_production_methods={ "pm_horizontal_drawer_cabinets" }
			}
            create_building={
        building="building_artillery_foundries"
                add_ownership={ 
                    building={ 
                        type="building_financial_district"
                        country="c:DUM"
                        levels=1
                        region="STATE_CROWNPEAK"
                   }
                }
        reserves=1
        activate_production_methods={ "pm_cannons" "pm_automation_disabled" }
      }
			create_building={
				building="building_construction_sector"
				level=2
				reserves=1
				activate_production_methods={ "pm_wooden_buildings" }
			}				
			create_building={
				building="building_university"
				level=2
				reserves=1
				activate_production_methods={ "pm_scholastic_education" }
			}
			create_building={
				building="building_arts_academy"
				level=1
				reserves=1
				activate_production_methods={ "pm_traditional_art" }
			}
            create_building={
				building="building_furniture_manufacturies"
                add_ownership={ 
                    building={ 
                        type="building_financial_district"
                        country="c:DUM"
                        levels=5
                        region="STATE_CROWNPEAK"
                   }
                }
				reserves=1
				activate_production_methods={ "pm_lathe" "pm_automation_disabled" "pm_luxury_furniture" }
			}
            create_building={
				building="building_paper_mills"
                add_ownership={ 
                    building={ 
                        type="building_financial_district"
                        country="c:DUM"
                        levels=5
                        region="STATE_CROWNPEAK"
                   }
                }
				reserves=1
				activate_production_methods={ "pm_pulp_pressing" "pm_automation_disabled" }
			}
			create_building={
				building="building_rye_farm"
				add_ownership={ 
					building={ 
						type="building_manor_house"
						country="c:DUM"
						levels=10
						region="STATE_CROWNPEAK"
				   }
				}
				reserves=1
				activate_production_methods={ "pm_simple_farming"  "pm_tools_disabled" "pm_potatoes" }
			}
			create_building={
				building="building_livestock_ranch"
				add_ownership={ 
					building={ 
						type="building_manor_house"
						country="c:DUM"
						levels=3
						region="STATE_CROWNPEAK"
				   }
				}
				reserves=1
				activate_production_methods={  "pm_sheep_farms" "pm_standard_fences" "pm_unrefrigerated" "pm_slaughterhouses" }
			}			
			create_building={
				building="building_barracks"
				level=20
				reserves=1
				activate_production_methods={ "pm_general_training" }
			}
		}
	}`;

console.log([...string.match(regex)]);


s: $2$3$4$7\n$9\n				add_ownership\=\{ \n					building\=\{ \n						type\="building_manor_house"\n						country\="c:$6"\n						levels\=$11\n						region\="$2"\n\ } \n				\ }
s: $2$3$4$7\n$9\n				add_ownership=\{ \n					building=\{ \n						type="building_manor_house"\n						country="c:$6"\n						levels=$11\n						region="$2"\n } \n				 }
s:$3 $4$5$8\n			$11\n				add_ownership={ \n					building={ \n						type="building_manor_house"\n						country="c:$7"\n						levels=$12\n						region="$3"\n				   }\n				}
